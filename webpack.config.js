// configuracion del proyecto
const path = require('path');
const HtmlWebpackPlugin =require('html-webpack-plugin');

//
module.exports = {
    //punto de entrada | donde vive todo el codigo inicial
    entry: './src/index.js',
    // donde vamos a ponerlo 
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'maind.js',
    },
    // extensiones que usara el proyecto
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [ //estructura de babel //generar test
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    //plugins
    plugins: [
        new HtmlWebpackPlugin([
            {
                inject: true,
                template: '.public/index.html',
                filename: './index.html',
            }
        ])
    ]
}