const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        'no-code': './react/src/index.js',
    },
    output: {
        path: path.resolve(__dirname, './static/js/build'),
        chunkFilename: '[name].js',
        publicPath: '',
    },
    watchOptions: {
        ignored: /[\\/]node_modules[\\/]/,
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'pure-react-vendor',
                    chunks: 'all',
                },
            },
        },
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ],
    },
    devtool: 'inline-source-map',
}
