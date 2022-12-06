const path = require('path');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => ({
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/build'),
        filename: (argv.mode === 'development' ? '[name].js' : '[name]-[chunkhash].js'),
        publicPath: '/',
        assetModuleFilename: 'static/[name]-[hash][ext]',
        clean: true
    },
    watch: false,
    devtool: (argv.mode === 'development' ? 'eval-cheap-module-source-map' : false),
    stats: {
        warnings: false
    },
    target: ['web'],
    devServer: {
        port: 8080,
        historyApiFallback: true,
        compress: true,
        allowedHosts: 'auto',
        hot: true,
        host: '0.0.0.0',
        headers: { 'Access-Control-Allow-Origin': '*' },
        open: {
            target: ['http://localhost:8080/']
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: (argv.mode === 'development'),
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('node-sass'),
                            sourceMap: (argv.mode === 'development'),
                            sassOptions: {
                                outputStyle: (argv.mode === 'development' ? 'expanded' : 'compressed'),
                            }
                        },
                    }
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: true
                },
                extractComments: true,
                parallel: true
            })
        ],
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    name: 'vendors',
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'initial',
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new ProgressPlugin((percentage, msg) => {
            percentage = (percentage * 100);
            console.log('\x1b[35m', (percentage.toFixed(0) + '%'), '\x1b[0m', msg, 'process');
        })
    ]
});

