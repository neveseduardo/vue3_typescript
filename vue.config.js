const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        open: true,
        compress: true,
        https: false,
        hot: true,
        allowedHosts: 'all',
        historyApiFallback: true,
        port: 8080,
        host: 'localhost',
    },
})
