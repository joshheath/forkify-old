const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        // an irregular expression that tells us we want to go through all JS files
        test: /\.js$/,
        // ignore all the files in the node modules folder
        exclude: /node_modules/,
        // if it is a .js file, it will use the below loader on those files
        use: {
          loader: 'bable-loader'
        }
      }
    ]
  }
};
