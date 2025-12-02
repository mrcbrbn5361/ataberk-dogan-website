# Ataberk Doğan - Resmi Web Sitesi

Modern, dinamik ve responsive bir yayıncı web sitesi. React, TypeScript ve Vite ile geliştirilmiştir.

## Özellikler

- ✅ **Çok Sayfalı Yapı** - React Router ile ayrı sayfalar
- ✅ **Canlı Yayın Durumu** - Kick API entegrasyonu
- ✅ **YouTube Entegrasyonu** - Gerçek zamanlı video çekme (RSS)
- ✅ **Kick Klipleri** - Otomatik klip gösterimi
- ✅ **Haftalık Yayın Takvimi**
- ✅ **Sosyal Medya İstatistikleri**
- ✅ **Responsive Tasarım** - Mobil uyumlu
- ✅ **Modern UI/UX** - Animasyonlar ve geçişler
- ✅ **SEO Optimize**
- ✅ **Aktif Butonlar** - Tüm linkler çalışıyor

## Teknolojiler

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Lucide Icons

## Yerel Geliştirme

**Gereksinimler:** Node.js 18+

1. Bağımlılıkları yükle:

   ```bash
   npm install
   ```

2. Geliştirme sunucusunu başlat:

   ```bash
   npm run dev
   ```

3. Tarayıcıda aç: `http://localhost:3000`

## Production Build

```bash
npm run build
```

Build dosyaları `dist/` klasöründe oluşturulur.

## Vercel'e Deploy

### Otomatik Deploy (Token ile - Giriş Gerektirmez)

1. Vercel token al: https://vercel.com/account/tokens
2. Token'ı environment variable olarak ayarla:

**Windows (CMD):**
```cmd
set VERCEL_TOKEN=your_token_here
```

**Windows (PowerShell):**
```powershell
$env:VERCEL_TOKEN="your_token_here"
```

3. Deploy et:
```bash
vercel --prod --yes --token %VERCEL_TOKEN%
```

### Manuel Deploy (Giriş Gerektirir)

```bash
vercel --prod --yes
```

**🌐 Canlı Site:** https://ataberkdogan.vercel.app

## Çevre Değişkenleri

`.env.local` dosyası oluştur (opsiyonel):

```
GEMINI_API_KEY=your_api_key_here
```

## 🤖 Otomatik Deploy Script

### PowerShell
```powershell
.\deploy.ps1
```

### CMD
```cmd
deploy.cmd
```

**Not:** Script çalıştırmadan önce `VERCEL_TOKEN` environment variable'ını ayarlamalısınız.

## Lisans

© 2024 Ataberk Doğan. Tüm hakları saklıdır.
