const CACHE_NAME = 'qr-generator-v1';
const urlsToCache = [
  '.',
  'index.html'
  // Bạn có thể thêm các file khác vào đây nếu có, ví dụ file CSS, JS riêng
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});