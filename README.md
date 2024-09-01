README.md:

# Tamircii Projesi

Tamircii, endüstriyel anlamda bakım hizmeti veren ustalarla fabrika ve KOBİ'leri buluşturan bir platformdur.

## Proje Yapısı

- `backend/`: Node.js ve Express.js kullanılarak oluşturulan backend API
- `frontend/`: React.js ile oluşturulan web uygulaması
- `mobile/`: React Native ile oluşturulan mobil uygulama

## Başlangıç

1. Her bir klasörde (backend, frontend, mobile) `npm install` komutunu çalıştırarak bağımlılıkları yükleyin.
2. Root dizinde `docker-compose up --build` komutunu çalıştırarak tüm servisleri başlatın.

## Geliştirme

- Backend: `cd backend && npm run dev`
- Frontend: `cd frontend && npm start`
- Mobile: `cd mobile && npm start`

## Deployment

- Backend: Heroku'ya deploy edilebilir
- Frontend: Heroku veya Netlify'a deploy edilebilir
- Mobile: App Store ve Google Play Store'a yüklenebilir

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır.