const path = require('path')
const chalk = require('chalk')
const apiMocker = require('mocker-api')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const DEV_TYPE = process.env.DEV_TYPE
const DEV_TYPE_SCOPE = ['redux', 'thunk', 'saga', 'dva', 'hook']
const isValidDevType = DEV_TYPE_SCOPE.some(function (type) {
  return type === DEV_TYPE
})
if (!isValidDevType) {
  console.log(
    chalk.red(
      '目前支持的DEV_TYPE：' +
        JSON.stringify(['redux', 'thunk', 'saga', 'dva', 'hook'])
    )
  )
  process.exit(1)
}

module.exports = {
  entry: './src/' + DEV_TYPE + '/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    before(app) {
      apiMocker(app, path.resolve('./mock/index.js'))
    }
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    axios: 'axios'
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      title: 'Development'
    })
  ]
}
