import { safeEmojis } from '@t/emoji-array';
import { shuffle } from 'lodash';

export default (max) => {
  let randEmoji = {
    map: [],
    initial: [],
  };
  for (let i = 0; i < max; i++) {
    randEmoji.map.push(
      safeEmojis.indexOf(
        shuffle(safeEmojis)[Math.floor(Math.random() * safeEmojis.length)],
      ),
    );
    randEmoji.initial.push(
      safeEmojis.indexOf(
        shuffle(safeEmojis)[Math.floor(Math.random() * safeEmojis.length)],
      ),
    );
  }
  return randEmoji;
};
