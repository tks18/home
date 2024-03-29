/* eslint-disable no-restricted-globals */
/* eslint-disable prefer-template */
/* eslint-disable no-param-reassign */

/**
 * Scroll to function
 *
 * @param {string} element - id of Parent Element which holds the child elements to scroll.
 * @param {number} scrollPixels - Number of pixels to scroll.
 * @param {number} duration - Total Duration for scrolling.
 */
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
      }
    };
    window.requestAnimationFrame(scroll);
  }
}

export function countUpFromTime(countFrom) {
  countFrom = new Date(countFrom).getTime();
  const now = new Date();
  const countTo = new Date(countFrom);
  const timeDifference = now - countTo;
  const secondsInAHour = 60 * 60 * 1000;
  const secondsInADay = secondsInAHour * 24;
  const secondsInAWeek = secondsInADay * 7;
  const secondsInAYear = secondsInADay * 365;

  const years = Math.floor((timeDifference / secondsInAYear) * 1);
  const weeks = Math.floor(
    ((timeDifference % secondsInAYear) / secondsInAWeek) * 1,
  );
  const days = Math.floor(
    ((timeDifference % secondsInAWeek) / secondsInADay) * 1,
  );
  const hours = Math.floor(
    ((timeDifference % secondsInADay) / secondsInAHour) * 1,
  );
  const mins = Math.floor(
    (((timeDifference % secondsInADay) % secondsInAHour) / (60 * 1000)) * 1,
  );
  const secs = Math.floor(
    ((((timeDifference % secondsInADay) % secondsInAHour) % (60 * 1000)) /
      1000) *
      1,
  );

  const returnVals = {
    years,
    weeks,
    days,
    hours,
    minutes: mins,
    seconds: secs,
  };

  return returnVals;
}

export function getOs() {
  const { userAgent } = window.navigator;
  const { platform } = window.navigator;
  const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
  const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
  const iosPlatforms = ['iPhone', 'iPad', 'iPod'];
  let os = null;

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
  let viewPortWidth;
  let viewPortHeight;
  if (typeof window.innerWidth !== 'undefined') {
    viewPortWidth = window.innerWidth;
    viewPortHeight = window.innerHeight;
  } else if (
    typeof document.documentElement !== 'undefined' &&
    typeof document.documentElement.clientWidth !== 'undefined' &&
    document.documentElement.clientWidth !== 0
  ) {
    viewPortWidth = document.documentElement.clientWidth;
    viewPortHeight = document.documentElement.clientHeight;
  } else {
    viewPortWidth = document.getElementsByTagName('body')[0].clientWidth;
    viewPortHeight = document.getElementsByTagName('body')[0].clientHeight;
  }
  return { width: viewPortWidth, height: viewPortHeight };
}

export function ismobile() {
  const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  if (width > 966) {
    return false;
  }
  return true;
}

export function preFormatText(text) {
  const modified_content = text
    .replace(/\n/g, '&#10;')
    .replace(/</g, '&#60;')
    .replace(/>/g, '&#62;');
  return modified_content;
}

export function generateCodeEditor(text) {
  const modified_content = preFormatText(text);
  const lines = modified_content.split('&#10;');
  let total_lines = 0;
  let newLines = '';
  for (let i = 0; i < lines.length; i++) {
    if (i === 0) {
      newLines += `<span class="grey--text text-right non-touch my-0 py-0">     ${
        i + 1
      }  </span><span class="my-0 py-0"> ${lines[i]} </span>`;
    } else if (`${i + 1}`.length < 2) {
      newLines +=
        `<br />` +
        `<span class="grey--text text-right non-touch my-0 py-0">     ${
          i + 1
        }  </span><span class="my-0 py-0"> ${lines[i]} </span>`;
    } else if (`${i + 1}`.length > 1) {
      newLines +=
        `<br />` +
        `<span class="grey--text text-right non-touch my-0 py-0">    ${
          i + 1
        }  </span><span class="my-0 py-0"> ${lines[i]} </span>`;
    } else if (`${i + 1}`.length > 2) {
      newLines +=
        `<br />` +
        `<span class="grey--text text-right non-touch my-0 py-0">   ${
          i + 1
        }  </span><span class="my-0 py-0"> ${lines[i]} </span>`;
    } else if (`${i + 1}`.length > 3) {
      newLines +=
        `<br />` +
        `<span class="grey--text text-right non-touch my-0 py-0">  ${
          i + 1
        }  </span><span class="my-0 py-0"> ${lines[i]} </span>`;
    }
    if (i === lines.length - 1) {
      total_lines = i + 1;
    }
  }
  return {
    content: newLines,
    total_lines,
  };
}
