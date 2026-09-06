// Bare-minimum service worker — exists only to satisfy installability
// requirements (Chrome's "Add to Home Screen" / install prompt). No offline
// caching, no background sync — every request just passes through to the
// network, same as if there were no service worker at all.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
