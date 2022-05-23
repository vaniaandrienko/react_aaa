const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDevEnv = process.env.NODE_ENV === 'development'

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: "development",
    entry: ['@babel/polyfill', './index.jsx'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    devServer: {
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.ttf|woff|woff2|eot$/,
                use: ['file-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                use: ['file-loader']
            },
            {
                test: /\.xml}$/,
                use: ['xml-loader'],
            },
            {
                test: /\.csv}$/,
                use: ['csv-loader'],
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader'
                },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
    ],
    resolve: {
        extensions: ['webpack.js', '.jsx', '.js']
    },
    // optimization: {
    //   splitChunks: {
    //     chunks: "all"
    //   }
    // }
}