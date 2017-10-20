var path = require('path')
var webpack = require('webpack')
var htmlWebpackPlugin = require('webpack-html-plugin')

var ROOT_PATH = path.resolve(__dirname)
var APP_PATH  = path.resolve(ROOT_PATH,'app')
var BUILD_PATH= path.resolve(ROOT_PATH,'build')

var entryName = 'app.jsx'
var fileName = 'bundle.js'

module.exports = {
    entry:{
        app: path.resolve(APP_PATH,entryName)
    },
    output:{
        path:BUILD_PATH,
        filename:fileName
    },
    devtool:'eval-source-map',

    devServer:{
        historyApiFallback:true,
        hot:true,
        inline:true,
        progress:true
    },

    module:{
        rules:[
            // {
            //     test:/\.jsx?$/,
            //     loaders:'eslint-loader',
            //     enforce:'pre',
            //     include:APP_PATH
            // },
            {
                test:/\.jsx?$/,
                loaders:'babel-loader',
                include:APP_PATH
            }
        ]   
    },
    plugins:[
        new htmlWebpackPlugin({
            filename:'index.html'
        })
    ],
    resolve:{
        extensions:['.js','.jsx']
    }
}