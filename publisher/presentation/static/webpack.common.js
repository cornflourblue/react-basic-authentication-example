var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'https://api.bnr.network/v1',
			authEndpoint: 'getToken',
			userEndpoint: 'users'
        })
    }
}
