module.exports = {
    devServer: {
        host: process.env.VUE_APP_HOST,
        // https: true,
        proxy: {
            '/api': {
                target: process.env.VUE_APP_ENDPOINT,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '',
                },
            },
            '/mdm': {
                target: process.env.VUE_APP_MDM_ENDPOINT, // mdm
                changeOrigin: true,
                pathRewrite: {
                    '^/mdm': '/mdm',
                },
            },
        }
    }
}