# 🚀 Portfolyo

Koyu temalı, mobil uyumlu ve sıfır bağımlılıklı kişisel portfolyo sitesi.
HTML + CSS + vanilla JavaScript ile yazıldı — build adımı gerektirmez.

## ✨ Özellikler

- 📱 Mobil uyumlu (responsive) tasarım
- 🌙 Koyu tema, gradient vurgu renkleri
- 🎯 Yetenek çubukları kaydırınca animasyonla dolar
- 🍔 Küçük ekranlarda açılır menü
- ⚡ Sıfır bağımlılık, statik dosyalar — hızlı yükleme

## 🛠️ Kullanılan teknolojiler

- HTML5
- CSS3 (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript (IntersectionObserver)

## 📦 Kurulum

Kurulum gerekmiyor. Dosyaları indirip `index.html` dosyasını tarayıcıda açman yeterli.

```bash
git clone https://github.com/KULLANICI_ADI/portfolyo.git
cd portfolyo
# index.html dosyasını tarayıcıda aç
```

## 🌐 GitHub Pages ile yayınlama

1. Repoyu GitHub'a push et
2. Repo sayfasında **Settings → Pages** bölümüne git
3. **Source** olarak `main` branch'ini ve `/ (root)` klasörünü seç
4. **Save** de — siten `https://KULLANICI_ADI.github.io/portfolyo/` adresinde yayında olacak

## 🔧 Özelleştirme

| Ne değişecek | Nerede |
|---|---|
| İsim, başlık, tanıtım metni | `index.html` → `.hero` bölümü |
| Yetenek isimleri ve yüzdeleri | `index.html` → `data-level="80"` (0–100) |
| Etiketler | `index.html` → `.tags` bölümü |
| Sosyal medya linkleri | `index.html` → footer ve hero butonları |
| Renkler | `css/style.css` → `:root` değişkenleri |

## 📄 Lisans

MIT — serbestçe kullanabilirsin.
