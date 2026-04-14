'use client';

import { useEffect, useRef, useState } from 'react';
import { useSymptom } from '@/contexts/SymptomContext';

const ROW_H = 52;
const INTERVAL_MS = 3000;
const DURATION_MS = 500;
const MAX_VISIBLE = 3;
const PULSE_MS = 800;

type FeedItem = { text: string; time: string; match: number[] };

const FEED: FeedItem[] = [
  { text: 'DSG mekatronik arızası — Pendik',      time: '12 dk önce',      match: [2] },
  { text: 'CVT kayma problemi — Kartal',           time: '27 dk önce',      match: [3] },
  { text: 'ZF valf body sorunu — Tuzla',           time: '55 dk önce',      match: [4] },
  { text: 'DQ200 geçiş sertliği — Maltepe',        time: '1 sa 35 dk önce', match: [1] },
  { text: 'DQ250 kavrama aşınması — Ümraniye',     time: '2 sa 20 dk önce', match: [1, 5] },
  { text: 'Aisin TF-80SC valf gövdesi — Ataşehir', time: '3 sa 50 dk önce', match: [4] },
  { text: '7G-Tronic yağ sızıntısı — Kadıköy',     time: '5 sa 10 dk önce', match: [5] },
  { text: 'EDC7 vuruntu — Sancaktepe',             time: '6 sa 40 dk önce', match: [1] },
];

export default function LiveDiagnosedFeed() {
  const { selectedId } = useSymptom();
  const [buffer, setBuffer] = useState<FeedItem[]>(() => FEED.slice(0, MAX_VISIBLE + 1));
  const [animating, setAnimating] = useState(false);
  const [visible, setVisible] = useState(MAX_VISIBLE);
  const [pulsing, setPulsing] = useState(false);
  const [smoothOff, setSmoothOff] = useState(false);
  const cursor = useRef(MAX_VISIBLE + 1);
  const firstRun = useRef(true);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const update = () => setVisible(mq.matches ? 2 : 3);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setBuffer((prev) => [
          ...prev.slice(1),
          FEED[cursor.current % FEED.length],
        ]);
        cursor.current += 1;
        setAnimating(false);
      }, DURATION_MS);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    setSmoothOff(false);
    setPulsing(true);
    const r1 = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setSmoothOff(true);
        setPulsing(false);
      });
    });
    return () => cancelAnimationFrame(r1);
  }, [selectedId]);

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
