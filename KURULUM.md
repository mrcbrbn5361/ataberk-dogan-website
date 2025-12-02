# 🚀 Ataberk Doğan - Web Sitesi Kurulum Rehberi

## 📋 Gereksinimler

- Node.js 18+ 
- npm veya yarn
- Vercel CLI (deploy için)

## 🔧 Kurulum Adımları

### 1. Projeyi İndir

```bash
# Eğer Git kullanıyorsan
git clone [repo-url]
cd ataberkdogan

# Veya ZIP olarak indirdiysen
# Klasörü aç ve terminal'de klasöre git
```

### 2. Bağımlılıkları Yükle

```bash
npm install
```

### 3. Geliştirme Sunucusunu Başlat

```bash
npm run dev
```

Tarayıcıda aç: `http://localhost:3000`

## 🎨 Görselleri Ekle

### Aile Fotoğrafı
1. Fotoğrafı `ataberk-family.jpg` olarak kaydet
2. `public/images/` klasörüne kopyala

### Favicon (Logo)
1. AD logosunu `favicon.png` veya `favicon.svg` olarak kaydet
2. `public/` klasörüne kopyala

## 🏗️ Production Build

```bash
npm run build
```

Build dosyaları `dist/` klasöründe oluşur.

## 🌐 Vercel'e Deploy

### İlk Kurulum

```bash
# Vercel CLI'yi yükle (global)
npm install -g vercel

# Deploy et
vercel --prod --yes --public

# Ana domain'e yönlendir
vercel alias set [deployment-url] ataberkdogan.vercel.app
```

### Sonraki Deploymentlar

```bash
npm run build
vercel --prod --yes --public
```

## 📁 Proje Yapısı

```
ataberkdogan/
├── components/          # React componentleri
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Socials.tsx
│   ├── About.tsx
│   ├── Videos.tsx
│   ├── Schedule.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── pages/              # Sayfa componentleri
│   ├── Home.tsx
│   ├── AboutPage.tsx
│   ├── VideosPage.tsx
│   ├── SchedulePage.tsx
│   └── ContactPage.tsx
├── services/           # API servisleri
│   └── api.ts
├── public/             # Statik dosyalar
│   ├── images/
│   └── favicon.svg
├── App.tsx             # Ana uygulama
├── index.tsx           # Giriş noktası
├── index.html          # HTML template
└── package.json        # Bağımlılıklar
```

## 🔄 Güncelleme Yapmak

### 1. Kod Değişikliği Yap

Herhangi bir dosyayı düzenle (örn: `components/Hero.tsx`)

### 2. Test Et

```bash
npm run dev
```

### 3. Build Al

```bash
npm run build
```

### 4. Deploy Et

```bash
vercel --prod --yes --public
```

## 🛠️ Özelleştirme

### Renkleri Değiştir

`index.html` içinde Tailwind config:

```javascript
colors: {
  brand: {
    orange: '#FF5722',  // Ana renk
    yellow: '#FFC107',  // İkincil renk
    dark: '#09090B',    // Arka plan
    panel: '#18181B',   // Panel rengi
  }
}
```

### Sosyal Medya Linkleri

`constants.tsx` dosyasında `SOCIAL_LINKS` array'ini düzenle.

### Yayın Takvimi

`constants.tsx` dosyasında `WEEKLY_SCHEDULE` array'ini düzenle.

## 🐛 Sorun Giderme

### Port 3000 kullanımda

```bash
# Farklı port kullan
npm run dev -- --port 3001
```

### Build hatası

```bash
# node_modules'ü sil ve tekrar yükle
rm -rf node_modules
npm install
npm run build
```

### Vercel deploy hatası

```bash
# Vercel'den çıkış yap ve tekrar giriş yap
vercel logout
vercel login
vercel --prod --yes --public
```

## 📝 Notlar

- Görseller `public/` klasöründe olmalı
- API'ler client-side'da çalışıyor
- 30 dakika cache süresi var
- CORS proxy kullanılıyor

## 🔗 Linkler

- **Canlı Site:** https://ataberkdogan.vercel.app
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Vercel Docs:** https://vercel.com/docs

## 💡 İpuçları

1. Her değişiklikten sonra `npm run build` yap
2. Deploy etmeden önce local'de test et
3. Görselleri optimize et (max 500KB)
4. Cache'i temizlemek için hard refresh yap (Ctrl+Shift+R)

## 🆘 Yardım

Sorun yaşarsan:
1. Console'u kontrol et (F12)
2. Build log'larına bak
3. Vercel deployment log'larını incele

---

**Hazırlayan:** Kiro AI
**Tarih:** 1 Aralık 2024
**Versiyon:** 1.0.0
