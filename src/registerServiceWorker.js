/* eslint-disable no-console */

import { Workbox } from 'workbox-window';

let wb;
if ('serviceWorker' in navigator) {
  wb = new Workbox(`${process.env.BASE_URL}worker.js`);
  wb.addEventListener('controlling', () => {
    window.location.reload();
  });
  wb.register();
  console.log(
    'App is being served from cache by a service worker.\n' +
      'For more details, visit https://goo.gl/AFskqB',
  );
} else {
  wb = null;
}

export default wb;
