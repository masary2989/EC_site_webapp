module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: {
          loader: "css-loader"
        }
      },
      {
        test: /\.svg$/,
        use: {
          loader: "svg-react-loader"
        }
      },
      {
          test: /\.(png|jpg|gif)$/,
          loader: 'url-loader',
          options: {},
      }
    ]
  }
};
