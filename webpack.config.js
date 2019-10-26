const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'api.main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'node'
};