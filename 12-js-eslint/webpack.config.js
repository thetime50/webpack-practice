const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            // 只检查自己写的代码 不检查第三方库
            // 规则设置：
            //   package.json中 eslintConfig中设置
            //   使用 airbnb 规则
            {
                test: /\.js$/,
                exclude: /mode_modules/,
                loader: 'eslint-loader',
                options: {
                    fix: true, // 直接自动修复源码文件格式
                },
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development'
}
