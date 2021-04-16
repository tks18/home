const { title, baseSite } = require('./package.json');

const twitterData = {
  type: 'summary_large_image',
  username: '@shantk18',
  pic: 'assets/photos/me.jpg'
};
const keyWords =
  'Sudharshan TK, Portfolio, Shan.tk, https://shaaan.tk, shaaan.tk, sudharshan, Blog, Portfolio-blog';

const webSiteDesc =
  'Building Online Answers for Your Next Design Challenge. Sometimes Writes Blogs about Latest Tech Developments and Frameworks. Forgot, this is Sudharshan TK hehe xD';

module.exports = {
  title,
  baseSite,
  keyWords,
  twitterData,
  webSiteDesc
};
