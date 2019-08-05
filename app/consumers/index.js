const fs = require('fs');
const path = require('path');

module.exports = {
  load() {
    const consumerFileRegex = /_consumer.js$/;

    fs.readdirSync(path.join(__dirname))
      .filter(consumerPath => consumerFileRegex.test(consumerPath))
      /* eslint-disable global-require, import/no-dynamic-require */
      .map(consumerPath => require(`./${consumerPath}`));
    /* eslint-enable global-require, import/no-dynamic-require */
  },
};
