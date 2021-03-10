const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/build.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /.css$/,
                use: [
                    // 'style-loader', // 创建style标签 插入样式文本
                    MiniCssExtractPlugin.loader,//取代style-loader 将js中的css存为单独文件
                    'css-loader', // 读取css文件
                ],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            //输出文件
            filename: 'css/build.css'
        }),
    ],
    mode: 'development',
}