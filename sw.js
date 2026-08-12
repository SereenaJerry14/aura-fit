const CACHE_NAME = 'aura-fit-v3';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './assets/models/model_female.png',
  './assets/models/model_male.png',
  './assets/clothes/dress_summer.png',
  './assets/clothes/dress_gown.png',
  './assets/clothes/dress_suit.png',
  './assets/clothes/dress_cocktail.png',
  './assets/clothes/dress_jumpsuit.png',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png'
];

// Install Service Worker
self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching app assets...');
      return cache.addAll(ASSETS);
    })
  );
});

// Activate Service Worker
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Network-First & Stale-While-Revalidate Fetch Intercept:
// Serves static assets from cache instantly, updates the cache in the background, and falls back to network.
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET' || !e.request.url.startsWith('http')) {
    return;
  }
  
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      const networkFetch = fetch(e.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(e.request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch((err) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          throw err;
        });
      
      // Serve cached copy immediately, otherwise wait for network
      return cachedResponse || networkFetch;
    })
  );
});
