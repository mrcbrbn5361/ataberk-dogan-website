# 🎮 Modern Yayıncı Web Sitesi Şablonu

> Bu proje, özel gereksinimli bir birey olarak web geliştirme alanındaki yeteneklerimi göstermek ve diğer içerik üreticilerine faydalı olabilecek modern bir web sitesi şablonu oluşturmak amacıyla geliştirilmiştir.

## 📖 Proje Hakkında

Bu proje, Twitch, Kick, YouTube gibi platformlarda yayın yapan içerik üreticileri için hazırlanmış, modern ve kullanıcı dostu bir web sitesi şablonudur. Projeyi geliştirirken hem teknik becerilerimi geliştirmeyi hem de topluma katkı sağlamayı hedefledim.

### 🎯 Projenin Amacı

- **Erişilebilirlik**: Herkesin kolayca kullanabileceği, modern ve responsive bir tasarım
- **Öğrenme**: React, TypeScript ve modern web teknolojilerini öğrenme ve uygulama
- **Topluma Katkı**: Diğer yayıncıların profesyonel bir web sitesine sahip olmasını kolaylaştırma
- **Kişisel Gelişim**: Özel gereksinimli bir birey olarak yazılım geliştirme alanındaki yeteneklerimi gösterme

### 💡 Neden Bu Projeyi Geliştirdim?

Özel gereksinimli bir birey olarak, teknoloji ve yazılım geliştirme alanında kendimi geliştirmek ve topluma değer katmak istedim. Bu proje:

- Yazılım geliştirme becerilerimi pratiğe dökmeme yardımcı oldu
- Modern web teknolojilerini öğrenmemi sağladı
- Diğer içerik üreticilerine faydalı bir araç sunmamı mümkün kıldı
- Engellerin aşılabileceğini ve herkesin yazılım geliştirebileceğini gösterdi

## ✨ Özellikler

- 🎨 **Modern Tasarım**: Mor-pembe gradient renk paleti ile çarpıcı görünüm
- 📱 **Responsive**: Tüm cihazlarda mükemmel görünüm
- ⚡ **Hızlı**: Vite ile optimize edilmiş performans
- 🎮 **Canlı Yayın Durumu**: Kick/Twitch entegrasyonu
- 📺 **Video Galerisi**: YouTube video ve shorts gösterimi
- 📅 **Yayın Takvimi**: Haftalık yayın programı
- 💬 **Sosyal Medya**: Tüm platformlara kolay erişim
- 📧 **İletişim Formu**: Sponsorluk ve işbirliği için
- 🌙 **Karanlık Tema**: Göz yormayan glassmorphism efektleri

## 🛠️ Teknolojiler

- **React 19** - Modern UI kütüphanesi
- **TypeScript** - Tip güvenliği
- **Vite** - Hızlı build aracı
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Sayfa yönlendirme
- **Lucide React** - Modern ikonlar

## 🚀 Kurulum

### Gereksinimler

- Node.js 18 veya üzeri
- npm veya yarn

### Adımlar

1. Projeyi klonlayın:
```bash
git clone https://github.com/mrcbrbn5361/ataberk-dogan-website.git
cd ataberk-dogan-website
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

4. Tarayıcınızda [http://localhost:5173](http://localhost:5173) adresini açın

## 📦 Production Build

```bash
npm run build
```

Build çıktısı `dist` klasöründe oluşturulur.

## 📁 Proje Yapısı

```
├── components/          # React bileşenleri
│   ├── About.tsx       # Hakkımda bölümü
│   ├── Contact.tsx     # İletişim formu
│   ├── Footer.tsx      # Alt bilgi
│   ├── Hero.tsx        # Ana sayfa hero bölümü
│   ├── LiveStatus.tsx  # Canlı yayın durumu
│   ├── Navbar.tsx      # Navigasyon menüsü
│   ├── Schedule.tsx    # Yayın takvimi
│   ├── Socials.tsx     # Sosyal medya kartları
│   └── Videos.tsx      # Video galerisi
├── pages/              # Sayfa bileşenleri
├── services/           # API servisleri
├── public/             # Statik dosyalar
├── constants.tsx       # Konfigürasyon sabitleri
└── types.ts           # TypeScript tip tanımları
```

## 🎨 Özelleştirme

### Site Bilgilerini Güncelleme

`constants.tsx` dosyasını düzenleyerek:
- Site adı ve slogan
- Sosyal medya linkleri
- İletişim bilgileri

### Renkleri Değiştirme

Tailwind CSS kullanılmaktadır. Ana renkler:
- Mor: `purple-500`, `purple-600`
- Pembe: `pink-500`, `pink-600`
- Koyu arka planlar: `#0A0A0F`, `#14141C`

### İçerik Ekleme

1. `public/images/` klasörüne görselleri ekleyin
2. `services/api.ts` dosyasında API endpoint'lerini güncelleyin
3. Bileşenlerdeki içerikleri ihtiyacınıza göre düzenleyin

## 🌟 Katkıda Bulunma

Bu proje açık kaynaklıdır ve katkılara açıktır. Önerileriniz ve geliştirmeleriniz için pull request gönderebilirsiniz.

## 📝 Lisans

MIT License - Bu şablonu kendi projelerinizde özgürce kullanabilirsiniz!

## 💬 İletişim

Proje hakkında sorularınız veya önerileriniz için GitHub Issues kullanabilirsiniz.

---

**Not**: Bu proje, özel gereksinimli bir birey tarafından, yazılım geliştirme alanındaki yetenekleri göstermek ve topluma katkı sağlamak amacıyla geliştirilmiştir. Engellerin aşılabileceğine ve herkesin yazılım geliştirebileceğine inanıyorum. 💪

**Geliştirici**: Özel gereksinimli bir yazılım geliştirici  
**Amaç**: Öğrenme, gelişim ve topluma katkı  
**Mesaj**: Engeller bizi durduramaz, teknoloji hepimizin! 🚀
