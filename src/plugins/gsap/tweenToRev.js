import { gsap } from 'gsap';
import { lettersArray, safeEmojis } from '@t/emoji-array';
import observeNexecute from './observer';

const update = (options) => {
  let html = '';
  const wordsarray = options.emoji ? safeEmojis : lettersArray;
  options.map.startArray.forEach((map) => {
    html += wordsarray[Math.round(map) % wordsarray.length];
  });
  options.vm.$set(options.vm[options.arrayName], options.arrayProperty, html);
};

export function tweenToRevObserver(options) {
  observeNexecute(options.elem, () => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      repeatDelay: 2,
      onUpdate: () => {
        update(options);
      }
    });
    const wordsarray = options.emoji ? safeEmojis : lettersArray;
    options.map.finalArray.forEach((range, index) => {
      tl.to(
        options.map.startArray,
        {
          [index]: wordsarray.length * 2 + range,
          ease: 'power4',
          duration: index / 4 + 1
        },
        0
      );
    });
  });
}

export default (options) => {
  const tl = gsap.timeline({
    repeat: -1,
    yoyo: true,
    repeatDelay: 2,
    onUpdate: () => {
      update(options);
    }
  });
  const wordsarray = options.emoji ? safeEmojis : lettersArray;
  options.map.finalArray.forEach((range, index) => {
    tl.to(
      options.map.startArray,
      {
        [index]: wordsarray.length * 2 + range,
        ease: 'power4',
        duration: index / 4 + 1
      },
      0
    );
  });
};
