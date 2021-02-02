let cachedPages = [
  '/',
  '/offline.html',
  '/about',
  '/gallery',
  '/blog',
  '/projects',
];

self.addEventListener('install', function (event) {
  console.log('WORKER: install event in progress.');
  event.waitUntil(
    caches
      .open('offline')
      .then(function (cache) {
        return cache.addAll(cachedPages);
      })
      .then(function () {
        console.log('WORKER: install completed');
      }),
  );
});
self.addEventListener('fetch', function (event) {
  console.log('WORKER: fetch event in progress.');
  if (event.request.method !== 'GET') {
    console.log(
      'WORKER: fetch event ignored.',
      event.request.method,
      event.request.url,
    );
    return;
  }
  event.respondWith(
    caches.match(event.request).then(function (cached) {
      var networked = fetch(event.request)
        .then(fetchedFromNetwork, unableToResolve)
        .catch(unableToResolve);
      console.log(
        'WORKER: fetch event',
        cached ? '(cached)' : '(network)',
        event.request.url,
      );
      return cached || networked;
      function fetchedFromNetwork(response) {
        var cacheCopy = response.clone();
        console.log('WORKER: fetch response from network.', event.request.url);
        caches
          .open('offline')
          .then(function add(cache) {
            return cache.put(event.request, cacheCopy);
          })
          .then(function () {
            console.log(
              'WORKER: fetch response stored in cache.',
              event.request.url,
            );
          });
        return response;
      }
      function unableToResolve() {
        return caches.open('offline').then(function (cache) {
          return cache.match(event.request).then(function (matching) {
            if (!matching || matching.status == 404) {
              return cache.match('offline.html');
            } else {
              return matching;
            }
          });
        });
      }
    }),
  );
});

self.addEventListener('activate', function (event) {
  console.log('WORKER: activate event in progress.');
  event.waitUntil(
    caches
      .keys()
      .then(function (keys) {
        return Promise.all(
          keys
            .filter(function (key) {
              return !key.startsWith('offline');
            })
            .map(function (key) {
              return caches.delete(key);
            }),
        );
      })
      .then(function () {
        console.log('WORKER: activate completed.');
      }),
  );
});
