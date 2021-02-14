import { gsap } from 'gsap';
import observeNexecute from './observer';
import { lettersArray, safeEmojis } from '@t/emoji-array';

let update = (options) => {
  var html = '';
  let wordsarray = options.emoji ? safeEmojis : lettersArray;
  options.startArray.forEach((map) => {
    html += wordsarray[Math.round(map) % wordsarray.length];
  });
  options.vm.$set(options.vm[options.arrayName], options.arrayProperty, html);
};

export function tweenToObserver(options) {
  observeNexecute(options.elem, () => {
    var tl = gsap.timeline({
      onUpdate: () => {
        update(options);
      },
    });
    let wordsarray = options.emoji ? safeEmojis : lettersArray;
    options.finalArray.forEach((range, index) => {
      tl.to(
        options.startArray,
        {
          [index]: wordsarray.length * 2 + range,
          ease: 'power4',
          duration: index / 4 + 1,
        },
        0,
      );
    });
  });
}

export default (options) => {
  var tl = gsap.timeline({
    onUpdate: () => {
      update(options);
    },
  });
  let wordsarray = options.emoji ? safeEmojis : lettersArray;
  options.finalArray.forEach((range, index) => {
    tl.to(
      options.startArray,
      {
        [index]: wordsarray.length * 2 + range,
        ease: 'power4',
        duration: index / 4 + 1,
      },
      0,
    );
  });
};
