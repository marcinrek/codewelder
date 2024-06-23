// const config = require('../webpack.config');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const CopyPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env) => {
    return merge(common(env), {
        mode: 'production',
        devtool: 'source-map',
        plugins: [
            new CopyPlugin({
                patterns: [{from: 'src/components/**/*.bundle.js', to: 'assets/js/ssrBundles/[name][ext]'}],
            }),
            new BundleAnalyzerPlugin({
                analyzerMode: 'json',
                generateStatsFile: true,
            }),
        ],
        optimization: {
            minimize: true,
        },
    });
};
