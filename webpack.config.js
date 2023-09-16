const path = require('path');

module.exports = {
    mode: 'production',
    entry: './code/main.js',
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader","css-loader"]
          },
          {
            test: /\.png$/i,
            type: "asset/resource"
          },
          {
            test: /\.txt$/i,
            type: 'asset/source'
          },
          {
            test: /\.ttf$/i,
            type: "asset/resource"
          }
        ]
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/dist/',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/')
        }
    }
};