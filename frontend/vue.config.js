module.exports = {
    devServer: {
        proxy: {
            '^/data': {
                target: "http://localhost:5000",
                secure: false,
                pathRewrite: { '^/data': '' },
                changeOrigin: true,
                logLevel: "debug"

            }
        }
    }
};