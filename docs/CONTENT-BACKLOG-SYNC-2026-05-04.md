# İçerik Backlog Senkronu
**Tarih:** 2026-05-04  
**Durum:** Güncel ve referans alınacak ana içerik raporu  
**Kapsam:** Repo içindeki gerçek route envanteri + mevcut plan dokümanlarının senkronizasyonu

---

## 1. Yönetici Özeti

Site içerik tarafında başlangıç seviyesinde değil. Ana içerik omurgası kurulmuş, temel cluster'lar açılmış ve marka/araç çatısı aktif durumda. Asıl eksik, içerik sisteminin kendisinden çok, dokümanların ve backlog'un mevcut üretim durumunu geriden takip etmesi.

Bu rapor sonrası referans alınacak gerçek durum:

- Hizmet sayfaları aktif ve kapsamlı
- Rehber çatısı güçlü
- Blog sistemi aktif ama hacim olarak rehberin gerisinde
- Araç/marka mimarisi yayında
- Kalan iş, sıfırdan kurulum değil; boşluk kapatma ve derinleştirme

---

## 2. Güncel İçerik Envanteri

| Alan | Güncel durum | Not |
|---|---|---|
| `/hizmetler/` | 10 detay sayfa + 1 hub | Para getiren servis sayfaları aktif |
| `/rehber/` | 20 detay sayfa + 1 hub | Canonical bilgi mimarisi burada toplanıyor |
| `/blog/` | 3 statik özel sayfa + 2 dinamik yazı + dynamic route | Yeni blog içerikleri `data/posts.json` üzerinden akıyor |
| `/arac/[marka]/` | 20 marka dinamik sayfa | VW, BMW, Renault, Ford, Audi dahil |
| `/arac/dq200/` | 1 özel model sayfası | DQ200 odaklı landing |
| `/sanziman-tipleri/` | Hub + dinamik aile sayfaları | DSG, CVT, ZF, EAT, Aisin gibi aileler |

Toplam aktif editoryal yüzler:

- 10 hizmet içeriği
- 20 rehber içeriği
- 5 blog içeriği
- 20 marka sayfası
- 1 model sayfası

---

## 3. Tamamlanan Ana İşler

| Alan | Durum | Not |
|---|---|---|
| Hizmet omurgası | Tamamlandı | DSG, CVT, ZF, Aisin, EAT, bakım, mekatronik, kavrama, basınç tüpü, volant paketi var |
| Rehber omurgası | Tamamlandı | Semptom, arıza, vuruntu, kayma, mekatronik, fiyat içerikleri aktif |
| Marka/araç çatısı | Tamamlandı | 20 marka + DQ200 sayfası yayında |
| Şanzıman ailesi mimarisi | Tamamlandı | Hub + aile bazlı route yapısı aktif |
| Blog dynamic sistemi | Tamamlandı | `app/blog/[slug]` + `data/posts.json` çalışıyor |
| Blog/rehber tekilleştirme | Büyük ölçüde tamamlandı | Duplicate riski olan birçok eski `/blog/` içerik `/rehber/` tarafına taşınmış |
| Sprint 2 | Tamamlandı | Fiyat ve yüksek ticari niyet içerikleri üretildi |
| Faz 2 | Tamamlandı | Aisin ve EAT hizmet yüzleri açıldı |
| Sprint 4 | Tamamlandı | Marka genişlemesi ve navigasyon entegrasyonu tamamlandı |

---

## 4. Kısmen Tamamlanan Alanlar

| Alan | Durum | Eksik |
|---|---|---|
| Sprint 1 | Kısmen tamamlandı | `cvt-sanziman-tamiri` içeriği derinlik olarak güçlendirilmeli |
| Sprint 3 | Kısmen tamamlandı | `dsg-sanziman-tamiri` sayfasında derinleştirme ve içerik audit ihtiyacı var |
| Blog hacmi | Kısmen tamamlandı | Sistem kurulu ama düzenli yeni yazı akışı yetersiz |
| Marka standardizasyonu | Kısmen tamamlandı | Çekirdek alanlar düzeldi, derin içerik gövdelerinde eski marka varyasyonları kalmış olabilir |
| İç link optimizasyonu | Kısmen tamamlandı | Cluster içi dağıtım güçlendirilebilir |

---

## 5. Başlanmamış veya Repo'da Görünmeyen İçerikler

Bu içerikler eski planda var, fakat repo içinde aktif route veya veri kaydı olarak görünmüyor:

| İçerik | Durum | Not |
|---|---|---|
| `/blog/dq200-kavrama-rehberi/` | Başlanmamış | Yüksek niyetli ve stratejik boşluk |
| `/blog/dsg-sanziman-nedir/` | Başlanmamış | Üst funnel ve açıklayıcı pillar adayı |
| `/blog/otomatik-sanziman-ustasi-secimi/` | Başlanmamış | Güven ve dönüşüm odaklı içerik |
| `/sss/` | Başlanmamış | Ayrı bir hub olarak planlanmış, route görünmüyor |

---

## 6. Doküman Senkron Durumu

| Doküman | Eski durum | Yeni durum |
|---|---|---|
| `docs/SPRINT-PLAN.md` | Launch öncesi ve `vercel.app` dönemini anlatıyordu | Bu dosya güncel backlog özeti olarak yeniden yazıldı |
| `docs/PRE_LAUNC-AUDIT.md` | Aktif eksikmiş gibi duran tarihsel audit notları içeriyordu | Tarihsel arşiv notuna çevrildi |
| `CLAUDE.md` | Bazı sprint ve route referansları eski namespace mantığını taşıyordu | Güncel durum notu eklendi, ana referans rapora bağlandı |

---

## 7. Stratejik İçerik Açıkları

Yeni içerik planına geçmeden önce görülmesi gereken ana açıklar:

1. Blog tarafı, rehbere göre zayıf kalıyor.
2. Ticari niyetli bazı sayfalar mevcut ama destekleyici karşılaştırma ve karar içerikleri eksik.
3. DQ200, DSG temel eğitim içeriği ve servis seçimi içerikleri hâlâ boş.
4. Bazı mevcut sayfalar var ama "iyi içerik" seviyesine henüz gelmemiş; özellikle CVT ve genel DSG pillar alanlarında derinleştirme gerekiyor.

---

## 8. Yeni Planlama Öncesi Net Başlangıç Noktası

Yeni içerik üretimine şu kabulle başlanmalı:

- Temel site omurgası kurulu
- Kalan işin büyük bölümü içerik genişletme ve kalite artışı
- Öncelik artık "yeni route açmak" ile "mevcut yüksek değerli sayfaları derinleştirmek" arasında dengeli kurulmalı

Önerilen ilk yeni içerik havuzu:

1. `dq200-kavrama-rehberi`
2. `dsg-sanziman-nedir`
3. `otomatik-sanziman-ustasi-secimi`
4. mevcut `cvt-sanziman-tamiri` sayfasını güçlendirme
5. mevcut `dsg-sanziman-tamiri` sayfasını güçlendirme

---

## 9. Referans Kararı

Bugünden itibaren içerik ve backlog konuşmalarında önce bu rapor referans alınmalı.  
Eski sprint dokümanları tarihsel bağlam sağlar, ama gerçek durum tespiti için tek başına kullanılmamalıdır.
