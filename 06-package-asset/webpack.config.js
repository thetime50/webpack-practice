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
            {
                test: /\.css$/,//匹配文件
                // node 加载依赖包会自动往上级目录找 好像没法使用npm run webpack
                use: [// 处理方式 从后往前执行
                    'style-loader',// 创建syle标签，将js中的样式资源插入到header中
                    'css-loader',// 将css文件变为commonjs模块加载到js中
                ],
            },
            {
                test: /\.less$/,//匹配文件
                // node 加载依赖包会自动往上级目录找 好像没法使用npm run webpack
                use: [// 处理方式 从后往前执行
                    'style-loader',// 创建syle标签，将js中的样式资源插入到header中
                    'css-loader',// 将css文件变为commonjs模块加载到js中
                    'less-loader',// 将less文件编译为css文件
                ],
            },
            {
                test: /\.(jpg|png|gif)$/,//匹配文件
                loader: 'url-loader', // 使用ES6 module 处理模块 (引入为Object module)
                options: {
                    limit: 10 * 1024, // < 10k 使用base64加载 减少请求次数 文件变大
                    esModule: false, // 关闭es6 module 解析，使用commonjs解析
                    name: '[hash:10].[ext]', // ext 文件原扩展名
                }
            },
            {
                test: /\.html$/,//匹配文件 commonjs module 引入模块
                loader: 'html-loader',
                options: {
                    esModule: false
                }
            },
            {
                exclude: /\.(css|js|less|html|jpg|png|gif)$/,//匹配文件 commonjs module 引入模块
                loader: 'file-loader',
            },
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