const path = require('path');


module.export = {
    target: 'node', // what we want to excluse 
    entry: './src/index.js', //what will be the entry point of app
    output: {
        filename: 'client_bundle.js',
        path: path.resolve(__dirname, 'build/public'), // if the path doesnt exist, it will create a new one
        publicPath: '/build/public'
    },
    // module: {
    //     rules: [
    //       {
    //         test: /\.js$/,
    //         exclude: /(node_modules|bower_components)/,
    //         use: {
    //           loader: 'babel-loader'
    //         }
    //       },
    //     ]
    //   },
    module: {
        rules: [
            {
            test: /\.js$/,
            use: {
                loader: 'babel-loader'
              },
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
    }
    
}