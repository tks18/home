/* eslint-disable */

console.log(
  '%cDone',
  'background: #4BB543; font-weight: bold',
  ': App is being served from cache by a service worker.\n' +
    'For more details, visit https://goo.gl/AFskqB',
);

console.log(
  '%cWORKER:',
  'background: #FFC107; font-weight: bold; color: black',
  ' executing.',
);

const cachedPages = [
  '/',
  '/offline.html',
  '/about',
  '/gallery',
  '/blog',
  '/projects',
  '/about-this-project',
];

self.addEventListener('install', (event) => {
  console.log(
    '%cWORKER:',
    'background: #FFC107; font-weight: bold; color: black',
    ' install event in progress.',
  );
  event.waitUntil(
    caches
      .open('offline')
      .then((cache) => cache.addAll(cachedPages))
      .then(() => {
        console.log(
          '%cWORKER:',
          'background: #4BB543; font-weight: bold; color: black',
          ' install completed',
        );
      }),
  );
});

self.addEventListener('fetch', (event) => {
  console.log(
    '%cWORKER:',
    'background: #FFC107; font-weight: bold; color: black',
    ' fetch event in progress.',
  );
  if (event.request.method !== 'GET') {
    console.log(
      '%cWORKER:',
      'background: #FFC107; font-weight: bold; color: black',
      ' fetch event ignored.',
      event.request.method,
      event.request.url,
    );
    return;
  }
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const networked = fetch(event.request)
        .then(fetchedFromNetwork, unableToResolve)
        .catch(unableToResolve);
      console.log(
        '%cWORKER:',
        'background: #4BB543; font-weight: bold; color: black',
        ' fetch event',
        cached ? '(cached)' : '(network)',
        event.request.url,
      );
      return cached || networked;
      function fetchedFromNetwork(response) {
        const cacheCopy = response.clone();
        console.log(
          '%cWORKER:',
          'background: #4BB543; font-weight: bold; color: black',
          ' fetch response from network.',
          event.request.url,
        );
        caches
          .open('offline')
          .then((cache) => cache.put(event.request, cacheCopy))
          .then(() => {
            console.log(
              '%cWORKER:',
              'background: #4BB543; font-weight: bold; color: black',
              ' fetch response stored in cache.',
              event.request.url,
            );
          });
        return response;
      }
      function unableToResolve() {
        return caches.open('offline').then((cache) =>
          cache.match(event.request).then((matching) => {
            if (!matching || matching.status == 404) {
              console.log(
                '%cWORKER:',
                'background: #4BB543; font-weight: bold; color: black',
                ' Cache Not Found. Using Offline File',
              );
              return cache.match('offline.html');
            }
            console.log(
              '%cWORKER:',
              'background: #FFC107; font-weight: bold; color: black',
              ' File Found From Cache.',
            );
            return matching;
          }),
        );
      }
    }),
  );
});

self.addEventListener('activate', (event) => {
  console.log(
    '%cWORKER:',
    'background: #FFC107; font-weight: bold; color: black',
    ' activate event in progress.',
  );
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => !key.startsWith('offline'))
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => {
        console.log(
          '%cWORKER:',
          'background: #4BB543; font-weight: bold; color: black',
          ' activate completed.',
        );
      }),
  );
});

self.addEventListener('message', (event) => {
  console.log(
    '%cWORKER:',
    'background: #4BB543; font-weight: bold; color: black',
    'New Message from the Console.',
  );
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log(
      '%cWORKER:',
      'background: #4BB543; font-weight: bold; color: black',
      'New Version is getting Updated now !',
    );
    self.skipWaiting();
  }
});
