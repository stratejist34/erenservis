'use client';

import { useEffect, useRef, useState } from 'react';
import { useSymptom } from '@/contexts/SymptomContext';
import { BUSINESS_HOURS } from '@/lib/constants';

const ROW_H = 52;
const INTERVAL_MS = 3000;
const DURATION_MS = 500;
const MAX_VISIBLE = 3;
const PULSE_MS = 800;

type FeedRaw = { text: string; offsetMin: number; match: number[] };
type FeedItem = { text: string; time: string; match: number[] };

const FEED_RAW: FeedRaw[] = [
  { text: 'DSG mekatronik arızası — Pendik',      offsetMin: 12,  match: [2] },
  { text: 'CVT kayma problemi — Kartal',           offsetMin: 27,  match: [3] },
  { text: 'ZF valf body sorunu — Üsküdar',         offsetMin: 55,  match: [4] },
  { text: 'DQ200 geçiş sertliği — Maltepe',        offsetMin: 95,  match: [1] },
  { text: 'DQ250 kavrama aşınması — Ümraniye',     offsetMin: 140, match: [1, 5] },
  { text: 'Aisin TF-80SC valf gövdesi — Ataşehir', offsetMin: 230, match: [4] },
  { text: '7G-Tronic yağ sızıntısı — Kadıköy',     offsetMin: 310, match: [5] },
  { text: 'EDC7 vuruntu — Sancaktepe',             offsetMin: 400, match: [1] },
];

// Mesai saatleri — lib/constants.ts tek kaynak
const OPEN_HOUR = BUSINESS_HOURS.opensHour;
const OPEN_MIN = BUSINESS_HOURS.opensMinute;
const CLOSE_HOUR = BUSINESS_HOURS.closesHour;
const CLOSE_MIN = BUSINESS_HOURS.closesMinute;
const DAY_WINDOW_MIN = (CLOSE_HOUR * 60 + CLOSE_MIN) - (OPEN_HOUR * 60 + OPEN_MIN);
const DAY_NAMES = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];

function isBusinessOpen(d: Date): boolean {
  if (d.getDay() === 0) return false;
  const total = d.getHours() * 60 + d.getMinutes();
  return total >= OPEN_HOUR * 60 + OPEN_MIN && total <= CLOSE_HOUR * 60 + CLOSE_MIN;
}

function previousBusinessClose(ref: Date): Date {
  const d = new Date(ref);
  d.setDate(d.getDate() - 1);
  while (d.getDay() === 0) d.setDate(d.getDate() - 1);
  d.setHours(CLOSE_HOUR, CLOSE_MIN, 0, 0);
  return d;
}

function getAnchor(now: Date): Date {
  if (isBusinessOpen(now)) return now;
  const total = now.getHours() * 60 + now.getMinutes();
  const closeTotal = CLOSE_HOUR * 60 + CLOSE_MIN;
  // Mesai sonrası aynı gün → bugünün kapanışı
  if (now.getDay() !== 0 && total > closeTotal) {
    const a = new Date(now);
    a.setHours(CLOSE_HOUR, CLOSE_MIN, 0, 0);
    return a;
  }
  // Pazar veya mesai öncesi → önceki iş günü kapanışı
  return previousBusinessClose(now);
}

// offsetMin'i anchor'dan geriye sayarak hesaplar; mesai penceresinden
// taşarsa önceki iş gününe sarar (02:15 gibi imkansız saatler oluşmaz)
function computeItemTime(offsetMin: number, anchor: Date): Date {
  let remaining = offsetMin;
  let cursor = new Date(anchor);
  const cursorOpen = new Date(cursor);
  cursorOpen.setHours(OPEN_HOUR, OPEN_MIN, 0, 0);

  const windowMin = Math.max(0, (cursor.getTime() - cursorOpen.getTime()) / 60000);

  if (remaining <= windowMin) {
    return new Date(cursor.getTime() - remaining * 60000);
  }

  remaining -= windowMin;
  cursor = previousBusinessClose(cursorOpen);

  while (remaining > DAY_WINDOW_MIN) {
    remaining -= DAY_WINDOW_MIN;
    cursor = previousBusinessClose(cursor);
  }

  return new Date(cursor.getTime() - remaining * 60000);
}

function formatTime(itemTime: Date, now: Date, open: boolean): string {
  const sameDay = itemTime.toDateString() === now.toDateString();
  const yest = new Date(now);
  yest.setDate(now.getDate() - 1);
  const isYesterday = itemTime.toDateString() === yest.toDateString();
  const hh = String(itemTime.getHours()).padStart(2, '0');
  const mm = String(itemTime.getMinutes()).padStart(2, '0');

  if (sameDay && open) {
    const diffMin = Math.max(1, Math.floor((now.getTime() - itemTime.getTime()) / 60000));
    if (diffMin < 60) return `${diffMin} dk önce`;
    if (diffMin < 180) {
      const hr = Math.floor(diffMin / 60);
      const m = diffMin % 60;
      return m === 0 ? `${hr} sa önce` : `${hr} sa ${m} dk önce`;
    }
    return `Bugün ${hh}:${mm}`;
  }
  if (sameDay) return `Bugün ${hh}:${mm}`;
  if (isYesterday) return `Dün ${hh}:${mm}`;
  return `${DAY_NAMES[itemTime.getDay()]} ${hh}:${mm}`;
}

function buildFeed(): FeedItem[] {
  const now = new Date();
  const open = isBusinessOpen(now);
  const anchor = getAnchor(now);
  return FEED_RAW.map((r) => {
    const t = computeItemTime(r.offsetMin, anchor);
    return { text: r.text, time: formatTime(t, now, open), match: r.match };
  });
}

// SSR / ilk hydration için zaman damgası boş — mount'ta doldurulur
const EMPTY_FEED: FeedItem[] = FEED_RAW.map((r) => ({ text: r.text, time: '', match: r.match }));

export default function LiveDiagnosedFeed() {
  const { selectedId } = useSymptom();
  const feedRef = useRef<FeedItem[]>(EMPTY_FEED);
  const [buffer, setBuffer] = useState<FeedItem[]>(() => EMPTY_FEED.slice(0, MAX_VISIBLE + 1));
  const [animating, setAnimating] = useState(false);
  const [visible, setVisible] = useState(MAX_VISIBLE);
  const [pulsing, setPulsing] = useState(false);
  const [smoothOff, setSmoothOff] = useState(false);
  const cursor = useRef(MAX_VISIBLE + 1);
  const [prevSelectedId, setPrevSelectedId] = useState(selectedId);

  // selectedId değiştiğinde pulse state'ini render sırasında tetikle — React 19
  // önerilen pattern: useEffect ile sync setState yerine prev-value diff.
  if (prevSelectedId !== selectedId) {
    setPrevSelectedId(selectedId);
    setSmoothOff(false);
    setPulsing(true);
  }

  useEffect(() => {
    // Hydration'dan sonra gerçek saat damgasını hesapla — SSR'da new Date()
    // mismatch üretir, bu yüzden mount sonrası client'ta çalışır.
    const live = buildFeed();
    feedRef.current = live;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBuffer(live.slice(0, MAX_VISIBLE + 1));
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const update = () => setVisible(mq.matches ? 2 : 3);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    // Tab arka planda veya sekme gizliyken interval boşa CPU harcamasın —
    // visibilitychange ile duraklat/sürdür.
    let id: ReturnType<typeof setInterval> | null = null;
    const tick = () => {
      setAnimating(true);
      setTimeout(() => {
        setBuffer((prev) => [
          ...prev.slice(1),
          feedRef.current[cursor.current % feedRef.current.length],
        ]);
        cursor.current += 1;
        setAnimating(false);
      }, DURATION_MS);
    };
    const start = () => {
      if (id != null) return;
      id = setInterval(tick, INTERVAL_MS);
    };
    const stop = () => {
      if (id == null) return;
      clearInterval(id);
      id = null;
    };
    if (!document.hidden) start();
    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      stop();
    };
  }, []);

  useEffect(() => {
    if (!pulsing) return;
    const r1 = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setSmoothOff(true);
        setPulsing(false);
      });
    });
    return () => cancelAnimationFrame(r1);
  }, [pulsing]);

  const rendered = buffer.slice(0, visible + 1);

  return (
    <div
      className="overflow-hidden"
      style={{ height: visible * ROW_H }}
      aria-live="polite"
      aria-label="Son teşhisler"
    >
      <ul
        className="flex flex-col"
        style={{
          transform: animating ? `translateY(-${ROW_H}px)` : 'translateY(0)',
          transition: animating ? `transform ${DURATION_MS}ms ease-out` : 'none',
        }}
      >
        {rendered.map((item, i) => {
          const isIncoming = i === rendered.length - 1;
          const isLatest = i === 0;
          const isMatch = item.match.includes(selectedId);
          const bgActive = pulsing && isMatch;
          const dimActive = pulsing && !isMatch;
          return (
            <li
              key={i}
              style={{
                height: ROW_H,
                opacity: isIncoming ? (animating ? 1 : 0) : 1,
                transition:
                  animating && isIncoming ? `opacity ${DURATION_MS}ms ease-out` : 'none',
                borderBottom: '1px solid rgba(255,255,255,0.035)',
                backgroundColor: bgActive ? 'rgba(200,164,106,0.05)' : 'transparent',
                ...(smoothOff && !bgActive
                  ? { transition: `background-color ${PULSE_MS}ms ease-out` }
                  : {}),
              }}
              className="flex items-center gap-3 px-2 last:border-b-0"
            >
              <span
                className={`h-1 w-1 shrink-0 rounded-full ${isLatest ? 'bg-brass/70' : 'bg-iron-light'}`}
              />
              <div
                className="min-w-0 flex-1"
                style={{
                  opacity: dimActive ? 0.85 : 1,
                  transition: smoothOff ? `opacity ${PULSE_MS}ms ease-out` : 'none',
                }}
              >
                <div
                  className={`truncate font-saira text-sm ${
                    isLatest ? 'font-medium text-text-primary' : 'text-text-secondary'
                  }`}
                >
                  {item.text}
                </div>
                <div
                  className={`mt-1 font-jetbrains text-[10px] ${
                    i === 0 ? 'text-iron-light' : i === 1 ? 'text-iron-deep/80' : 'text-iron-deep/60'
                  }`}
                >
                  {item.time}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
