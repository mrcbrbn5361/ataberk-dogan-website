# API Entegrasyonları

## ✅ Aktif API'ler

### 1. Kick API
**Endpoint:** `https://kick.com/api/v1/channels/atadogann`
- ✅ Canlı yayın durumu
- ✅ İzleyici sayısı
- ✅ Takipçi sayısı (gerçek zamanlı)
- ✅ Yayın başlığı ve oyun

**Endpoint:** `https://kick.com/api/v2/channels/atadogann/clips`
- ✅ Son 4 klip
- ✅ Klip başlıkları
- ✅ İzlenme sayıları
- ✅ Thumbnail'ler

### 2. YouTube API (RSS)
**Endpoint:** `https://api.rss2json.com/v1/api.json`
- ✅ Son 3 normal video
- ✅ Son 4 shorts
- ✅ Video başlıkları
- ✅ Yayın tarihleri
- ✅ Thumbnail'ler

**Not:** YouTube subscriber sayısı RSS'den çekilemiyor, manuel güncelleme gerekiyor.

### 3. Discord API
**Endpoint:** `https://discord.com/api/guilds/597053493471346708/widget.json`
- ✅ Anlık online üye sayısı
- ⚠️ Widget'ın sunucuda aktif olması gerekiyor

**Discord Widget Ayarları:**
1. Discord sunucusuna git
2. Server Settings → Widget
3. "Enable Server Widget" aktif et
4. Widget Channel seç
5. Kaydet

### 4. Instagram Scraper (Ban-Safe)
**Endpoint:** `https://www.instagram.com/api/v1/users/web_profile_info/`
- ✅ Public profile data
- ✅ Takipçi sayısı
- ✅ Rate limit: 30 dakika cache ile güvenli
- ⚠️ User-Agent header gerekli

### 5. Twitter/X Scraper (Ban-Safe)
**Endpoint:** `https://cdn.syndication.twimg.com/widgets/followbutton/info.json`
- ✅ Public follower count
- ✅ Takipçi sayısı
- ✅ Rate limit: 30 dakika cache ile güvenli
- ✅ Authentication gerektirmiyor

### 6. YouTube Scraper (Ban-Safe)
**Endpoint:** `https://api.allorigins.win/raw?url=...`
- ✅ Public channel page scraping
- ✅ Abone sayısı
- ✅ Rate limit: 30 dakika cache ile güvenli
- ✅ CORS proxy kullanıyor

## 🔄 Otomatik Güncelleme

### Cache Mekanizması
- **Süre:** 30 dakika
- **Amaç:** Gereksiz API çağrılarını önlemek
- **Kapsam:** Sosyal medya istatistikleri

### Yenileme Sıklığı
- **Kick:** Her 30 dakikada bir
- **YouTube:** Her 30 dakikada bir
- **Discord:** Her 30 dakikada bir
- **Instagram:** Manuel
- **Twitter:** Manuel

## 🐛 Sorun Giderme

### Kick Klipleri Görünmüyor
1. Kick API'nin CORS politikası değişmiş olabilir
2. Console'da hata mesajlarını kontrol et
3. API endpoint'i değişmiş olabilir

**Çözüm:**
```javascript
// services/api.ts içinde
console.log('Kick clips data:', clipsData);
```

### Discord Üye Sayısı Güncellenmiyor
1. Discord sunucusunda Widget aktif mi kontrol et
2. Widget Channel ayarlanmış mı kontrol et
3. Sunucu ID'si doğru mu kontrol et

**Sunucu ID:** `597053493471346708`

### YouTube Subscriber Sayısı Güncellenmiyor
YouTube RSS API'si subscriber count döndürmüyor.

**Manuel Güncelleme:**
```typescript
// services/api.ts
let youtubeSubscribers = "520K"; // Buradan güncelle
```

## 📊 Veri Formatları

### Sayı Formatı
- 1,000+ → "1.0K"
- 10,000+ → "10.0K"
- 100,000+ → "100.0K"
- 1,000,000+ → "1.0M"

### Tarih Formatı
- Türkçe: "29.11.2024"
- Format: `toLocaleDateString('tr-TR')`

## 🔐 API Limitleri

### Kick
- ✅ Rate limit yok (şimdilik)
- ✅ Authentication gerektirmiyor

### YouTube RSS
- ✅ Rate limit: ~100 request/hour
- ✅ Authentication gerektirmiyor

### Discord Widget
- ✅ Rate limit: Bilinmiyor
- ✅ Authentication gerektirmiyor

## 🛡️ Ban Önleme Stratejileri

### 1. Cache Mekanizması
- **30 dakika** cache süresi
- Aynı veri tekrar tekrar çekilmiyor
- Rate limit aşılmıyor

### 2. User-Agent Headers
- Instagram için mobil user-agent
- Twitter için standart browser user-agent
- YouTube için CORS proxy

### 3. Public Endpoints
- Sadece public veriler çekiliyor
- Authentication gerektirmiyor
- Rate limit düşük

### 4. Fallback Values
- API hata verirse eski değer kullanılıyor
- Site çökmüyor
- Kullanıcı deneyimi bozulmuyor

## 🚀 Gelecek İyileştirmeler

1. **Instagram API:** Unofficial scraper kullanılabilir
2. **Twitter API:** API key alınabilir (ücretli)
3. **YouTube API:** Official API key ile subscriber count
4. **Kick Clips:** Alternatif endpoint araştırılabilir
