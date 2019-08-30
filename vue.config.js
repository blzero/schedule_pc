module.exports = {
    devServer: {
        host: 'schedule.dev.51eparty.com',
        https: true,
        proxy: {
            '/api': {
                target: 'http://192.168.22.37:8024',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '',
                },
            },
            '/mdm': {
                target: 'http://192.168.22.37:9250', // mdm
                changeOrigin: true,
                pathRewrite: {
                    '^/mdm': '/mdm',
                },
            },
        }
    }
}