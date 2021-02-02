'use strict';

console.log(
  '%cDone',
  'background: #4BB543',
  ': App is being served from cache by a service worker.\n' +
    'For more details, visit https://goo.gl/AFskqB',
);
console.log('%cWORKER:', 'background: #FFC107; color: black', ' executing.');
let cachedPages = [
  '/',
  '/offline.html',
  '/about',
  '/gallery',
  '/blog',
  '/projects',
];

self.addEventListener('install', function (event) {
  console.log(
    '%cWORKER:',
    'background: #FFC107; color: black',
    ' install event in progress.',
  );
  event.waitUntil(
    caches
      .open('offline')
      .then(function (cache) {
        return cache.addAll(cachedPages);
      })
      .then(function () {
        console.log(
          '%cWORKER:',
          'background: #4BB543; color: black',
          ' install completed',
        );
      }),
  );
});
self.addEventListener('fetch', function (event) {
  console.log(
    '%cWORKER:',
    'background: #FFC107; color: black',
    ' fetch event in progress.',
  );
  if (event.request.method !== 'GET') {
    console.log(
      '%cWORKER:',
      'background: #FFC107; color: black',
      ' fetch event ignored.',
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
        '%cWORKER:',
        'background: #4BB543; color: black',
        ' fetch event',
        cached ? '(cached)' : '(network)',
        event.request.url,
      );
      return cached || networked;
      function fetchedFromNetwork(response) {
        var cacheCopy = response.clone();
        console.log(
          '%cWORKER:',
          'background: #4BB543; color: black',
          ' fetch response from network.',
          event.request.url,
        );
        caches
          .open('offline')
          .then(function add(cache) {
            return cache.put(event.request, cacheCopy);
          })
          .then(function () {
            console.log(
              '%cWORKER:',
              'background: #4BB543; color: black',
              ' fetch response stored in cache.',
              event.request.url,
            );
          });
        return response;
      }
      function unableToResolve() {
        return caches.open('offline').then(function (cache) {
          return cache.match(event.request).then(function (matching) {
            if (!matching || matching.status == 404) {
              console.log(
                '%cWORKER:',
                'background: #4BB543; color: black',
                ' Cache Not Found. Using Offline File',
              );
              return cache.match('offline.html');
            } else {
              console.log(
                '%cWORKER:',
                'background: #FFC107; color: black',
                ' File Found From Cache.',
              );
              return matching;
            }
          });
        });
      }
    }),
  );
});

self.addEventListener('activate', function (event) {
  console.log(
    '%cWORKER:',
    'background: #FFC107; color: black',
    ' activate event in progress.',
  );
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
        console.log(
          '%cWORKER:',
          'background: #4BB543; color: black',
          ' activate completed.',
        );
      }),
  );
});
