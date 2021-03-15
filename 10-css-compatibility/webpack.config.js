const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// process.env.NODE_ENV = 'development'
process.env.NODE_ENV = 'production'


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
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                ident: 'postcss',
                                plugins: [
                                    'postcss-preset-env'
                                    // 配置webpack.json文件的browserslist
                                    // 可以是.browserslistrc文件，browserslistin键package.json或 browserslist环境变量
                                    // browserslist:{
                                    //      通过设置 process.env.NODE_ENV = development 环境变量应用
                                    //     "development": [
                                    //         "last 1 chrome version",
                                    //         "last 1 firefox version",
                                    //         "last 1 safari version"
                                    //     ],
                                    //     // 默认应用生产环境
                                    //     "production": [
                                    //         ">0.2%",
                                    //         "not dead",
                                    //         "not op_mini all"
                                    //     ]
                                    // }
                                ]
                            },
                        },
                    }
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
    // mode: 'development',
    mode: 'production',
}