let cachedPages = [
  '/',
  '/offline.html',
  '/about',
  '/gallery',
  '/blog',
  '/projects',
];

self.addEventListener('install', (event) => {
  event.waitUntil(preload());
});

var preload = () => {
  console.log('Installing the Web App');
  return caches.open('offline').then((cache) => {
    console.log('Caching Important Pages and Images');
    return cache.addAll(cachedPages);
  });
};

self.addEventListener('fetch', function (event) {
  event.respondWith(
    checkResponse(event.request).catch(function () {
      return returnFromCache(event.request);
    }),
  );
  event.waitUntil(addToCache(event.request));
});

var checkResponse = function (request) {
  return new Promise(function (fulfill, reject) {
    fetch(request).then(function (response) {
      if (response.status !== 404) {
        fulfill(response);
      } else {
        reject();
      }
    }, reject);
  });
};

var addToCache = function (request) {
  return caches.open('offline').then(function (cache) {
    return fetch(request).then(function (response) {
      console.log(response.url + ' was cached');
      return cache.put(request, response);
    });
  });
};

var returnFromCache = function (request) {
  return caches.open('offline').then(function (cache) {
    return cache.match(request).then(function (matching) {
      if (!matching || matching.status == 404) {
        return cache.match('offline.html');
      } else {
        return matching;
      }
    });
  });
};
