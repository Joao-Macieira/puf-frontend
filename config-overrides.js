/* eslint-disable no-param-reassign */
const path = require('path');

module.exports = {
  webpack: config => {
    config.resolve = {
      ...config.resolve,
      alias: { '~': path.resolve(__dirname, 'src') },
    };

    return config;
  },
  jest: config => ({
    ...config,
    moduleNameMapper: {
      '^~(.*)$': '<rootDir>/src$1',
      '^axios$': require.resolve('axios'),
    },
  }),
};
