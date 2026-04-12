# 👨‍🍳 Şef Kimi Çalışma Protokolü

> GPT 5.4 (Codex) onaylı limit dostu orkestrasyon sistemi

---

## 🎯 ALTIN KURAL

**Sorun "hangi model daha zeki" değil, "hangi işi hangi genişlikte context'le verdiğin".**

Limitleri asıl patlatan şey:
- Büyük context
- Uzun reasoning  
- Gereksiz repo okuma

---

## 👥 ROL DAĞILIMI

| Rol | Model | Görev | Max Context |
|-----|-------|-------|-------------|
| **Şef** | Kimi | Orkestrasyon, karar, final review | - |
| **SEO Yazar** | GPT-4o | Landing, blog, meta, uzun içerik | 4000 chars |
| **Kod Uzmanı** | Codex | Kritik TSX, refactor, multi-file | 3 dosya max |
| **Yardımcı** | Qwen (Çırak/Kalfa) | Özet, JSON, ilk pass review | 1800-2600 chars |
| ~~Gemini~~ | - | ❌ Devre dışı (timeout) | - |

---

## ⚠️ CODEX KISITLAMALARI (Kritik!)

Codex'e **asla** şu kombinasyon verilmez:
```
❌ "Araştır + Düşün + Planla + Uygula"
```

**Doğru kullanım:**
```
✅ "app/page.tsx'de hero section'ı güncelle: yeni başlık ekle"
✅ "lib/schema.ts'e Article schema ekle, mevcut yapıyı koru"
✅ "components/Button.tsx'te variant prop'u ekle"
```

**Codex Limitleri:**
- Max 3 dosya
- Max 1 hedef çıktı
- Direkt patch, uzun plan yok
- Geri kalan hafıza dosyada, sohbette değil

---

## 🔄 İŞ AKIŞI

```
Kullanıcı → Şef Kimi
              ↓
    ┌─────────┼─────────┐
    ↓         ↓         ↓
  GPT-4o    Codex     Qwen
 (SEO)    (Kod)    (Özet)
    ↓         ↓         ↓
    └─────────┴─────────┘
              ↓
         Şef Kimi
         (Review)
              ↓
           Deploy
```

---

## 📝 ÖRNEK KOMUTLAR

### SEO İçeriği
```bash
node tools/delegate.mjs --role gpt \
  "Write H1 + meta + 3 H2 for /blog/aisin-sanziman-ariza/. 
   Keywords: aisin arıza belirtileri, toyota şanzıman arızası. 
   Max 600 chars."
```

### Kod Değişikliği
```bash
node tools/delegate.mjs --role gpt \
  "Add EAT link to Footer.tsx HIZMET_LINKS array. 
   Format: {href: '/eat/', label: 'EAT Servisi'}. 
   Only the edit, no explanation."
```

### Özet/Analiz
```bash
node tools/delegate.mjs --role cirak \
  "Summarize CLAUDE.md Sprint 4 section in 3 bullets."
```

---

## 💡 KİMİ ŞEF CHECKLIST

Her iş öncesinde:
- [ ] Bu iş delegation gerekiyor mu?
- [ ] Kim hangi role uygun?
- [ ] Context sınırı aşılıyor mu?
- [ ] Hafıza dosyada mı tutulacak?

---

## 🚫 YASAKLI KALIPLAR

| Yanlış | Doğru |
|--------|-------|
| "Bu dosyayı analiz et, planla, sonra uygula" | "Dosyada şu satırı şununla değiştir" |
| "Tüm projeyi gözden geçir" | "Sadece Footer.tsx'yi kontrol et" |
| "Büyük bir refactor düşünelim" | "3 dosyada şu değişiklikleri yap" |
| "Önce düşün, sonra yaz" | "Direkt çıktı üret" |

---

**Son Güncelleme:** 10 Nisan 2026  
**Versiyon:** v1.0 - GPT 5.4 Onaylı
