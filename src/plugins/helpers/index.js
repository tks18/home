export function scrollTo(element, scrollPixels, duration) {
  const scrollPos = element.scrollLeft;
  if (
    !(
      (scrollPos === 0 || scrollPixels > 0) &&
      (element.clientWidth + scrollPos === element.scrollWidth ||
        scrollPixels < 0)
    )
  ) {
    const startTime =
      'now' in window.performance ? performance.now() : new Date().getTime();

    const scroll = (timestamp) => {
      const timeElapsed = timestamp - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      element.scrollLeft = scrollPos + scrollPixels * progress;
      if (timeElapsed < duration) {
        window.requestAnimationFrame(scroll);
      } else {
        return;
      }
    };
    window.requestAnimationFrame(scroll);
  }
}

export function countUpFromTime(countFrom) {
  countFrom = new Date(countFrom).getTime();
  var now = new Date(),
    countTo = new Date(countFrom),
    timeDifference = now - countTo;
  var secondsInAHour = 60 * 60 * 1000;
  var secondsInADay = secondsInAHour * 24;
  var secondsInAWeek = secondsInADay * 7;
  var secondsInAYear = secondsInADay * 365;

  let years = Math.floor((timeDifference / secondsInAYear) * 1);
  let weeks = Math.floor(
    ((timeDifference % secondsInAYear) / secondsInAWeek) * 1,
  );
  let days = Math.floor(
    ((timeDifference % secondsInAWeek) / secondsInADay) * 1,
  );
  let hours = Math.floor(
    ((timeDifference % secondsInADay) / secondsInAHour) * 1,
  );
  let mins = Math.floor(
    (((timeDifference % secondsInADay) % secondsInAHour) / (60 * 1000)) * 1,
  );
  let secs = Math.floor(
    ((((timeDifference % secondsInADay) % secondsInAHour) % (60 * 1000)) /
      1000) *
      1,
  );

  let returnVals = {
    years: years,
    weeks: weeks,
    days: days,
    hours: hours,
    minutes: mins,
    seconds: secs,
  };

  return returnVals;
}

export function getOs() {
  var userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
    iosPlatforms = ['iPhone', 'iPad', 'iPod'],
    os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
  }

  return os;
}

export function getViewport() {
  var viewPortWidth;
  var viewPortHeight;
  if (typeof window.innerWidth != 'undefined') {
    (viewPortWidth = window.innerWidth), (viewPortHeight = window.innerHeight);
  } else if (
    typeof document.documentElement != 'undefined' &&
    typeof document.documentElement.clientWidth != 'undefined' &&
    document.documentElement.clientWidth != 0
  ) {
    (viewPortWidth = document.documentElement.clientWidth),
      (viewPortHeight = document.documentElement.clientHeight);
  } else {
    (viewPortWidth = document.getElementsByTagName('body')[0].clientWidth),
      (viewPortHeight = document.getElementsByTagName('body')[0].clientHeight);
  }
  return { width: viewPortWidth, height: viewPortHeight };
}

export function ismobile() {
  var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  if (width > 966) {
    return false;
  } else {
    return true;
  }
}
