import { Workbox } from 'workbox-window';

let wb;

if ('serviceWorker' in navigator) {
  wb = new Workbox(`${process.env.BASE_URL}service-worker.js`);
  wb.addEventListener('waiting', () => {
    console.log(
      `A new service worker has installed, but it can't activate` +
        `until all tabs running the current version have fully unloaded.`,
    );
  });
  wb.addEventListener('activated', (event) => {
    if (!event.isUpdate) {
      console.log('Service worker activated for the first time!');
    }
  });
  wb.addEventListener('controlling', () => {
    window.location.reload();
  });
  wb.addEventListener('message', (event) => {
    if (event.data.type === 'CACHE_UPDATED') {
      const { updatedURL } = event.data.payload;

      console.log(`A newer version of ${updatedURL} is available!`);
    }
  });
  wb.addEventListener('activated', () => {
    const urlsToCache = [
      location.href,
      ...performance.getEntriesByType('resource').map((r) => r.name),
    ];
    wb.messageSW({
      type: 'CACHE_URLS',
      payload: { urlsToCache },
    });
  });

  wb.register();
  const swVersion = wb.messageSW({ type: 'GET_VERSION' });
  console.log('Service Worker version:', swVersion);
} else {
  wb = null;
}

export default wb;
