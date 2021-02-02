/* eslint-disable no-console */

import { Workbox } from 'workbox-window';

let wb;
if ('serviceWorker' in navigator) {
  wb = new Workbox(`${process.env.BASE_URL}worker.js`);
  wb.addEventListener('controlling', () => {
    window.location.reload();
  });
  wb.addEventListener('activated', (event) => {
    if (!event.isUpdate) {
      console.log(
        '%cDone:',
        'background: #4BB543',
        ' Thanks for Trying Out My App\n' +
          'This app has been Successfully Installed.',
      );
    }
  });
  wb.register();
} else {
  wb = null;
}

export default wb;
