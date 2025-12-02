# Görseller Klasörü

## Gerekli Görseller

### 1. Aile Fotoğrafı
**Dosya Adı:** `ataberk-family.jpg`
**Konum:** Bu klasör (`public/images/`)
**Kullanım:** Hero bölümünde aile fotoğrafı

### 2. Favicon (Sekme Logosu)
**Dosya Adı:** `favicon.png`
**Konum:** `public/` klasörü (bir üst klasör)
**Kullanım:** Tarayıcı sekmesinde logo
**Boyut:** 512x512 px veya 256x256 px

## Görsel Ekleme Adımları

1. **Aile Fotoğrafı:**
   - Görseli `ataberk-family.jpg` olarak kaydet
   - `public/images/` klasörüne kopyala

2. **Favicon:**
   - AD logosunu `favicon.png` olarak kaydet
   - `public/` klasörüne kopyala

3. **Build & Deploy:**
   ```bash
   npm run build
   vercel --prod --yes --public
   vercel alias set [deployment-url] ataberkdogan.vercel.app
   ```
