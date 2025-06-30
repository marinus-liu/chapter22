const { merge } = require('webpack-merge')
const baseWebpackConfig  = require('./webpack.config.base')

const webpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'eval-source-map',
    stats: { children: false }  //日志消息不传递
})

module.exports = webpackConfig

