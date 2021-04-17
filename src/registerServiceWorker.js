/* eslint-disable no-console */

import { Workbox } from 'workbox-window';

const isProd = !(process.env.NODE_ENV == 'development');
let wb;

if (isProd) {
  if ('serviceWorker' in navigator) {
    wb = new Workbox(`${process.env.BASE_URL}worker.js`);
    wb.addEventListener('controlling', () => {
      window.location.reload();
    });
    wb.addEventListener('activated', (event) => {
      if (!event.isUpdate) {
        console.log(
          '%cDone:',
          'background: #4BB543; font-weight: bold',
          ' Thanks for Trying Out My App\n' +
            'This app has been Successfully Installed.',
        );
      }
    });
    wb.register();
  } else {
    wb = null;
  }
} else {
  wb = null;
}
const worker = wb;

export default worker;
