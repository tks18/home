export default (elem, callback) => {
  let observer = null;
  const target = document.querySelector(elem);
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6
  };
  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback();
      }
    });
  };
  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(target);
};
