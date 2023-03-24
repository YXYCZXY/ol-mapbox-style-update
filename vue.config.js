/*
 * @Description: 
 * @Date: 2023-03-10 17:14:12
 * @LastEditors: Yuanxy
 * @LastEditTime: 2023-03-24 09:17:45
 * @FilePath: \ol-mapbox-style\vue.config.js
 * @Author: Yuanxy 
 */

// webpack.config.js  或 vue.config.js
const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: './static',
    productionSourceMap: false,
    lintOnSave: false,

    devServer: {
        port: 8082,
        open: true,
        proxy:  {
        //可以配置多个,(如果要同时请求第三方和后台服务器，可以配置多个，分别代理)
            '/proxy': {
                'target': 'http://124.220.154.106:8001', //第三方接口地址
                'secure': true, // false为http访问，true为https访问
                'changeOrigin': true, // 跨域访问设置，true代表跨域
                'pathRewrite': { // 路径改写规则
                    '^/proxy': '' // 以/proxy/为开头的改写为'/'             
                }
            }
        }
    } 
}
