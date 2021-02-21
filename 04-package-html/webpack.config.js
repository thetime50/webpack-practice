const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    // loader 配置
    module: {
        rules: [
        ],
    },

    // plugins
    plugins: [
        // html-webpack-plugin
        new HtmlWebpackPlugin({
            //复制'./src/index.html' 文件，并自动引入打包输出的所有资源(JS/CSS)
            template: './src/index.html',
        }),
    ],
    mode: 'development',
    // mode: 'production',

}