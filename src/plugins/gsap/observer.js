export default (elem, callback) => {
  let observer;
  let target = document.querySelector(elem);
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6,
  };
  let handleIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback();
      }
    });
  };
  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(target);
};
