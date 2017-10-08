const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/styles/app.scss',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [{
      test: /\.(scss|sass|css)$/i,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          { loader: 'css-loader' },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      })
    },{
      test: /\.(jpg|jpeg|png|gif|svg|eot|ttf|woff|woff2)$/i,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: './images/'
        }
      }]
    }]
  },

  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
};
