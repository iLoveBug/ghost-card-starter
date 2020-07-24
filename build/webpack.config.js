const path = require('path')

const TerserPlugin = require('terser-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../'),
    filename: './ghost-card-starter.js',
    library: 'GhostCardStarter',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    sourcePrefix: '' // Needed to compile multiline strings in Cesium
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  node: {
    // Resolve node module use of fs
    fs: 'empty',
    Buffer: false,
    http: 'empty',
    https: 'empty',
    zlib: 'empty'
  },
  module: {
    unknownContextRegExp: /^.\/.*$/,
    unknownContextCritical: false,
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        // Remove pragmas
        test: /\.js$/,
        enforce: 'pre',
        sideEffects: false,
        use: [{
          loader: 'strip-pragma-loader',
          options: {
            pragmas: {
              debug: false
            }
          }
        }]
      },
      {
        test: /\.css$/,
        use: ['style-loader', { loader: 'css-loader' }],
        sideEffects: true
      },
      {
        test: /\.(ttf|woff|png|jpe?g|gif|svg|xml)(\?.*)?$/,
        use: ['url-loader']
      }
    ]
  },
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false
          },
          mangle: {
            safari10: true
          }
        },
        sourceMap: false,
        cache: true,
        parallel: true,
        extractComments: false
      })
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
