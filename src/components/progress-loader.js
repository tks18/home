import NProgress from 'nprogress';

NProgress.configure({
  minimum: 0.1,
  easing: 'ease',
  speed: 250,
  trickle: true,
  trickleRate: 0.05,
  trickleSpeed: 850,
  showSpinner: true,
});

export default NProgress;
