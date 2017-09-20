var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module:{
    rules:[
      {test: /\.css$/, use:['style-loader','css-loader']},
      {test: /\.js$/, exclude: /node_modules/, use:['babel-loader']},
      {test: /\.jsx?$/, exclude: /node_modules/, use:['babel-loader']}
    ]
  },
  devServer:{
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        stats: 'errors-only',
        open: true
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Vocab',
    template: './src/index.ejs'
  })]
}
