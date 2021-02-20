import { safeEmojis, lettersArray } from '@t/emoji-array';
import { shuffle, random } from 'lodash';

export const generateRandomEmojis = (max) => {
  let randEmoji = {
    finalArray: [],
    startArray: [],
  };
  for (let i = 0; i < max; i++) {
    randEmoji.finalArray.push(
      safeEmojis.indexOf(
        shuffle(safeEmojis)[Math.floor(Math.random() * safeEmojis.length)],
      ),
    );
    randEmoji.startArray.push(
      safeEmojis.indexOf(
        shuffle(safeEmojis)[Math.floor(Math.random() * safeEmojis.length)],
      ),
    );
  }
  return randEmoji;
};

export const generateInitialVals = (max) => {
  let initial = [];
  for (let i = 0; i < max; i++) {
    initial.push(random(0, lettersArray.length - 1, false));
  }
  return initial;
};

export const generateWordMaps = (word) => {
  let correctedWord = word.toLowerCase();
  let wordMap = [];
  let initialVals = [];
  for (let i = 0; i < correctedWord.length; i++) {
    let currentLetter = correctedWord[i];
    wordMap.push(lettersArray.indexOf(currentLetter));
    initialVals.push(random(0, lettersArray.length - 1, false));
  }
  return {
    finalArray: wordMap,
    startArray: initialVals,
  };
};

export const generateWordMapsReverse = (start, end) => {
  let correctedStart = start.toLowerCase();
  let correctedEnd = end.toLowerCase();
  let initialVals = [];
  let wordMap = [];
  for (let i = 0; i < correctedStart.length; i++) {
    let startLetter = correctedStart[i];
    let endLetter = correctedEnd[i];
    wordMap.push(lettersArray.indexOf(startLetter));
    initialVals.push(lettersArray.indexOf(endLetter));
  }
  return {
    finalArray: wordMap,
    startArray: initialVals,
  };
};
