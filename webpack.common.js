const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const glob = require("glob");

module.exports = {
    entry: {
        index: './src/js/index.js',
        search: './src/js/search.js',
        app:'./src/components/App.js',
        faq: glob.sync("./src/components/faq/*.js"),
        select: glob.sync("./src/components/select/*.js"),
        selectmulti: glob.sync("./src/components/selectmulti/*.js")
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin({
            filename: 'css/[name].css',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: "./src/app.html",
            filename: "./faq.html",
            chunks: ['app','faq']
        }),
        new HtmlWebpackPlugin({
            template: "./src/app.html",
            filename: "./select.html",
            chunks: ['select']
        }),
        new HtmlWebpackPlugin({
            template: "./src/app.html",
            filename: "./selectmulti.html",
            chunks: ['selectmulti']
        }),
        new HtmlWebpackPlugin({
            filename: 'search.html',
            template: './src/search.html',
            chunks: ['search']
        })
    ],
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: ['@babel/preset-env','@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name:'media/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    watchOptions: {
        ignored: /node_modules/
    },
    mode: 'none'
};
