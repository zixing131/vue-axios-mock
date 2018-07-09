'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const px2rem = require('postcss-plugin-px2rem');
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
  postcss: function () {
    // let el = document.documentElement;
    // let dpWidth = 375;
    // let size = 16;
    // let rootValue  = 375 / dpWidth * size;
    // console.log(rootValue)
    return [px2rem({rootValue:37.5})];
  }
}
