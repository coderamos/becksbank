// /* eslint-disable no-undef */
const path = require('path');

module.exports = {
  process(filename) {
    return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
  }
};
