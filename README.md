# 🎮 Ataberk Doğan - Modern Yayıncı Web Sitesi

> Bu proje, sevdiğim yayıncı Ataberk Doğan için yapay zeka destekli araçlar kullanarak geliştirdiğim modern bir web sitesidir. Özel gereksinimli bir birey olarak, hem yazılım geliştirme becerilerimi göstermek hem de sevdiğim içerik üreticisine katkıda bulunmak istedim.

## �‍💻 Ataberk nDoğan Kimdir?

**Ataberk Doğan** (atadogann), Türkiye'nin sevilen içerik üreticilerinden biridir. Trakya'dan dünyaya açılan Ataberk Abi, samimi ve eğlenceli yayın tarzıyla binlerce kişiye ulaşmaktadır.

### 🎯 Ataberk Abi'nin Özellikleri:
- 🎮 **Platform**: Kick ve YouTube'da aktif yayıncı
- 🌍 **Köken**: Trakya - Edirne
- 🎭 **Tarz**: Samimi, eğlenceli ve içten yayınlar
- 👨‍👩‍👧‍👦 **İçerik**: Oyun, sohbet ve aile içerikleri
- 💚 **Topluluk**: Sıcak ve kucaklayıcı bir izleyici kitlesi
- 📺 **Geçmiş**: Vine ve YouTube'da içerik üreticiliğine başladı

Ataberk Abi'nin en büyük özelliği, her izleyicisine değer vermesi ve samimi yaklaşımıdır. Yayınlarında Trakya şivesiyle anlattığı hikayeler ve goygoyları ile izleyicilerini güldürür ve eğlendirir.

## 💝 Neden Bu Projeyi Yaptım?

Bu projeyi geliştirmemin birkaç önemli nedeni var:

1. **Ataberk Abi'ye Sevgim**: Yayınlarını takip ettiğim ve çok sevdiğim bir içerik üreticisi. Ona bir şeyler geri vermek istedim.

2. **Kişisel Gelişim**: Özel gereksinimli bir birey olarak, yazılım geliştirme alanında kendimi geliştirmek ve yeteneklerimi göstermek istedim.

3. **Yapay Zeka ile Öğrenme**: Modern yapay zeka araçlarını kullanarak nasıl daha hızlı ve etkili kod yazabileceğimi öğrendim.

4. **Topluma Katkı**: Bu projeyi açık kaynak olarak paylaşarak, diğer yayıncıların da kullanabileceği bir şablon oluşturdum.

## 🤖 Yapay Zeka Kullanımı

Bu proje geliştirilirken **yapay zeka destekli araçlar** kullanılmıştır:

### 🛠️ Kullanılan Yapay Zeka Araçları:
- **Kiro AI**: Kod yazımı ve geliştirme sürecinde yardımcı oldu
- **GitHub Copilot**: Kod tamamlama ve öneriler için
- **ChatGPT**: Problem çözme ve algoritma geliştirme için

### ⚠️ Önemli Not - API Key Gereksinimleri:

Projenin bazı özelliklerini kullanabilmek için **API anahtarlarına** ihtiyacınız olabilir:

1. **YouTube Data API**: Video ve shorts çekmek için
   - Google Cloud Console'dan ücretsiz alınabilir
   - Günlük 10,000 istek limiti var

2. **Kick API**: Canlı yayın durumu için
   - Resmi API henüz public değil
   - Alternatif scraping yöntemleri kullanılıyor

3. **CORS Proxy**: API istekleri için
   - `allorigins.win` gibi ücretsiz servisler kullanılabilir

**Not**: API anahtarları olmadan da proje çalışır, ancak bazı dinamik özellikler (canlı yayın durumu, video listesi) çalışmayabilir. Statik içerik olarak da kullanılabilir.

## 📖 Proje Hakkında

Bu proje, Twitch, Kick, YouTube gibi platformlarda yayın yapan içerik üreticileri için hazırlanmış, modern ve kullanıcı dostu bir web sitesi şablonudur.

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

## �️ Tedknolojiler

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
- (Opsiyonel) YouTube Data API Key
- (Opsiyonel) Kick API erişimi

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

3. Environment dosyasını oluşturun (opsiyonel):
```bash
cp .env.example .env.local
```

4. API anahtarlarınızı ekleyin (opsiyonel):
```env
VITE_YOUTUBE_API_KEY=your_youtube_api_key_here
VITE_KICK_API_KEY=your_kick_api_key_here
```

5. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

6. Tarayıcınızda [http://localhost:5173](http://localhost:5173) adresini açın

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
│   └── api.ts         # API entegrasyonları
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

### API Entegrasyonları

`services/api.ts` dosyasında:
- YouTube video çekme
- Kick canlı yayın durumu
- Discord widget entegrasyonu

## 🤝 Yapay Zeka ile Geliştirme Süreci

Bu proje, yapay zeka araçlarının engelli bireylerin yazılım geliştirmesini nasıl kolaylaştırabileceğinin güzel bir örneğidir:

- **Kod Yazımı**: AI, karmaşık kod bloklarını hızlıca oluşturmama yardımcı oldu
- **Hata Ayıklama**: Yapay zeka, hataları bulmamı ve düzeltmemi kolaylaştırdı
- **Öğrenme**: Yeni teknolojileri AI ile birlikte öğrenmek çok daha hızlı oldu
- **Erişilebilirlik**: AI araçları, özel gereksinimli bireylerin kodlama yapmasını demokratikleştiriyor

## 🌟 Katkıda Bulunma

Bu proje açık kaynaklıdır ve katkılara açıktır. Önerileriniz ve geliştirmeleriniz için pull request gönderebilirsiniz.

## 📝 Lisans

MIT License - Bu şablonu kendi projelerinizde özgürce kullanabilirsiniz!

## 💬 İletişim

Proje hakkında sorularınız veya önerileriniz için GitHub Issues kullanabilirsiniz.

## 🙏 Teşekkürler

- **Ataberk Doğan**'a: İlham verdiği ve harika içerikler ürettiği için ❤️
- **Yapay Zeka Araçlarına**: Geliştirme sürecini kolaylaştırdıkları için 🤖
- **Açık Kaynak Topluluğuna**: Kullandığım tüm kütüphaneler için 🌟

---

**Not**: Bu proje, özel gereksinimli bir birey tarafından, sevdiği yayıncıya destek olmak ve yazılım geliştirme alanındaki yetenekleri göstermek amacıyla, yapay zeka araçları kullanılarak geliştirilmiştir. 

Engeller bizi durduramaz, teknoloji ve yapay zeka sayesinde herkes yazılım geliştirebilir! 💪

**Geliştirici**: Özel gereksinimli bir yazılım geliştirici  
**İlham Kaynağı**: Ataberk Doğan (@atadogann)  
**Araçlar**: React, TypeScript, Yapay Zeka  
**Mesaj**: Sevdiğiniz insanlara değer katın, teknoloji hepimizin! 🚀

---

### 🔗 Bağlantılar

- **Ataberk Doğan'ın Kick Kanalı**: [kick.com/atadogann](https://kick.com/atadogann)
- **YouTube Kanalı**: [youtube.com/@atadogann](https://youtube.com/@atadogann)
- **Discord Sunucusu**: [discord.gg/ataberk-dogan-in-yeri](https://discord.gg/ataberk-dogan-in-yeri-597053493471346708)
