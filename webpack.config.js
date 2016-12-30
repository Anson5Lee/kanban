const path = require('path');
module.exports = {
    entry: [
      "./source/app.js"
    ],
    output: {
      path: __dirname + '/build',
      filename: 'bundle.js',
      publicPath: '/assets/'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          include: path.join(__dirname, 'source'),
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015']
          }
        }
      ]
    }
}
