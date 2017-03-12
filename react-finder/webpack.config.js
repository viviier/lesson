const HtmlWebpackPlugin = require('html-webpack-plugin')

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: `${__dirname}/src/index.html`,
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: `${__dirname}/dist`,
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['latest', 'react']
                    }
                }]
            }
        ] 
    },
    devServer: {
        port: 8008,
        historyApiFallback: true
    },
    plugins: [HtmlWebpackPluginConfig]
}