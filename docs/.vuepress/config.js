const path = require('path')
const webpack = require('webpack')

module.exports = {
  title: 'Ghost Extension Card Starter Components',
  description: 'Ghost Extension Card Starter Components Documentation',
  themeConfig: {
  },
  lastUpdated: 'Last Updated',
  configureWebpack: (config, isServer) => {
    if (!isServer) {
      return {
        output: {
          sourcePrefix: '' // Needed to compile multiline strings in Cesium
        },
        node: {
          fs: 'empty',
          Buffer: false,
          http: "empty",
          https: "empty",
          zlib: "empty"
        },
        resolve: {
          alias: {
            docs: path.resolve(__dirname, './..')
          }
        },
        module: {
          unknownContextRegExp: /^.\/.*$/,
          unknownContextCritical: false
        }
      }
    }
  }
}
