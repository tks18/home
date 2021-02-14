import { default as oNe } from './observer';
import { default as tT, tweenToObserver as tTo } from './tweenTo';
import { default as tTr, tweenToRevObserver as tTrO } from './tweenToRev';

export default {
  tweenToObserver: tTo,
  tweenTo: tT,
  tweenToRev: tTr,
  tweenToRevObserver: tTrO,
  observeNexecute: oNe,
};

export const tweenToObserver = tTo;
export const tweenTo = tT;
export const tweenToRev = tTr;
export const tweenToRevObserver = tTrO;
export const observeNexecute = oNe;
