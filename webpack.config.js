const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['webpack.js', 'web.js', '.ts', '.tsx', '.js', '.css', '.vue'],
        alias: {'vue$': 'vue/dist/vue.esm.js'},
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test:/\.ts$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                },
                exclude: /node_modules/
            },
            {
                test:/\.(ts|vue)$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                exclude: /node_modules/
            },
            {
                test:/\.js$/,
                enforce: 'pre',
                loader: 'source-map-loader',
                exclude: /node_modules/
            },
            {
                test:/\.css$/,
                use:['style-loader', 'css-loader']
            },
            {
                test: /\.(jpe?g|png|gif)(\?.+)?$/,
                loader: 'url-loader',
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg|svgz|)(\?.+)?$/,
                loader: 'url-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        port: 8081,
        inline: true,
    },
}