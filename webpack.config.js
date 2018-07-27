const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: './src/index.html'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['babel-preset-env', 'babel-preset-stage-2', 'babel-preset-react']
          }
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name=./images/[name].[ext]'
      }
    ]
  },
  plugins: [htmlPlugin]
};
