const { resolve } = require('path')

console.log('**', __dirname)

module.exports = {
    entry: resolve(__dirname, './src/index.js'),// './src/index.js',
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
        ],
    },
    // plugins
    plugins: [
        // 
    ],
    mode: 'development',
    // mode: 'production',
}