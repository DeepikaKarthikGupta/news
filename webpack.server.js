const path = require('path');
const webPackNodeExternals = require('webpack-node-externals');

module.export = {
    target: 'node', // what we want to excluse 
    entry: './server.js', //what will be the entry point of app
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'), // if the path doesnt exist, it will create a new one
        publicPath: '/build'
    },
     module: {
        rules: [
            {
            test: /\.js$/,
            loader: 'babel-loader',
            // use: {
            //     loader: 'babel-loader'
            //   },
            exclude: '/node_modules',
            Option: {
                preset: [
                    'react',
                    'stage-0',
                    ['env',{
                        target: {browser: ['last 2 versions']} // it tells the browser to supposrt last two versions of webpack
                    } ]
                ]               
            }
            }
        ]
    },
    externals: [webPackNodeExternals()]
}