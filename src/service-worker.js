self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener('message', (msg) => {
  if (msg.data.action == 'skipWaiting') {
    self.skipWaiting();
  }
});

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

workbox.recipes.pageCache();

workbox.recipes.googleFontsCache();

workbox.recipes.staticResourceCache();

workbox.recipes.imageCache();

workbox.recipes.offlineFallback();
