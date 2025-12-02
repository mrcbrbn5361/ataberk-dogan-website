# Ataberk Doğan - Site Bilgileri

## 🌐 Canlı URL
**Ana Site:** https://ataberkdogan.vercel.app

## 📊 Deployment Bilgileri

### Son Deployment
- Platform: Vercel
- Build: Başarılı ✅
- Durum: Production
- Tarih: 29 Kasım 2024

### Deployment Komutu
```bash
vercel --prod --yes
```

### Alias Ayarlama
```bash
vercel alias set [deployment-url] ataberkdogan.vercel.app
```

## 🔧 Teknik Detaylar

### Framework & Kütüphaneler
- React 19.2.0
- TypeScript 5.8.2
- Vite 6.2.0
- React Router DOM 6.22.3
- Tailwind CSS (CDN)
- Lucide React 0.554.0

### API Entegrasyonları
- ✅ Kick API (Canlı yayın durumu)
- ✅ Kick API (Takipçi sayısı)
- ✅ Kick API (Klipler)
- ✅ YouTube RSS (Son videolar)
- ✅ YouTube RSS (Shorts)

### Özellikler
- ✅ Çok sayfalı yapı (React Router)
- ✅ Otomatik sosyal medya güncelleme (5 dakika)
- ✅ Cache mekanizması
- ✅ Responsive tasarım
- ✅ SEO optimize
- ✅ Production-ready

## 📱 Sayfalar

1. **Ana Sayfa** (`/`)
   - Hero section
   - Canlı yayın durumu
   - Sosyal medya istatistikleri

2. **Hakkımda** (`/about`)
   - Biyografi
   - Doğum tarihi ve memleket
   - Hikaye

3. **İçerikler** (`/videos`)
   - YouTube videoları (son 3)
   - YouTube Shorts (son 4)
   - Kick klipleri (son 4)

4. **Takvim** (`/schedule`)
   - Haftalık yayın programı
   - Platform bilgileri

5. **İletişim** (`/contact`)
   - İletişim formu
   - E-posta bilgisi

## 🔄 Güncelleme Süreci

### Token ile (Otomatik - Önerilen)

1. Kod değişikliği yap
2. Build al: `npm run build`
3. Token ayarla: `$env:VERCEL_TOKEN="your_token"`
4. Deploy et: `vercel --prod --yes --token $env:VERCEL_TOKEN`

### Manuel (Giriş Gerektirir)

1. Kod değişikliği yap
2. Build al: `npm run build`
3. Deploy et: `vercel --prod --yes`
4. Alias ayarla (gerekirse)

## 📈 Performans

- Build boyutu: ~262 KB (gzipped: 80 KB)
- CSS boyutu: ~1.13 KB (gzipped: 0.48 KB)
- HTML boyutu: ~2.25 KB (gzipped: 1.00 KB)

## 🎨 Tasarım

- Renk paleti: Turuncu (#FF5722), Sarı (#FFC107), Koyu (#09090B)
- Font: Inter (body), Outfit (headings)
- Tema: Dark mode
- Animasyonlar: Smooth transitions

## 🔗 Sosyal Medya Linkleri

- Kick: https://kick.com/atadogann
- YouTube: https://youtube.com/@atadogann
- Instagram: https://instagram.com/ataberk.dogan
- Twitter: https://twitter.com/atadogann
- Discord: https://discord.gg/ataberk-dogan-in-yeri-597053493471346708

## 📝 Notlar

- Sosyal medya istatistikleri her 5 dakikada bir otomatik güncellenir
- Cache mekanizması sayesinde gereksiz API çağrıları önlenir
- Tüm API'ler CORS proxy üzerinden çalışır
- Production build optimize edilmiş ve minify edilmiştir
