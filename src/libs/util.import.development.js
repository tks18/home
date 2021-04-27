/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

module.exports = (file) => require(`@/views/${file}`).default;
