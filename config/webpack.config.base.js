const path = require('path')
const utils  =  require('./utils') 

const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


// debugger
const webpackconfig = {
    target: 'node',
    /* mode: 'development', //base 环境中不需要 */
    entry: {
        /* server: path.join(__dirname, 'index.js') */
        // 引入utils
        server: path.join(utils.APP_PATH, 'index.js')
    },
    output: {
        filename: '[name].bundle.js',
       /*  path: path.join(__dirname, './dist') */
       // 引入utils
       path: utils.DIST_PATH
    },
    /* devtool: 'eval-source-map', //base 环境 中不需要 */
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    /* options:{
                        presets: '@babel/preset-env'
                    } */
                },
                exclude: [path.join(__dirname, '/node_modules')]
            }    
            
        ]
    },
    externals: [ nodeExternals()],
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env' :{
                NODE_ENV : ( process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod') ? "'production'" : "'development'"
            }
        })
    ],
    
//    target: 'node'
    node: {
        global: true,
        __filename: true,
        __dirname: true
    }
};

console.log(webpackconfig)

module.exports = webpackconfig