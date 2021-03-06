const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'card',
      filename: 'remoteEntry.js',
      exposes: {
          './CardShow': './src/bootstrapp'
      },
      shared: ['faker'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
