const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    //请求完整地址是： https://m.1905.com/m/getEpginfo.json?callback=epginfo2020&_=1675849056476
    app.use(
        '/m',
        createProxyMiddleware({
            target: 'https://m.1905.com',
            changeOrigin: true,
        })
    );
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://81.70.151.103:32704',
            changeOrigin: true,
        })
    );
    app.use(
        '/v2',
        createProxyMiddleware({
            target: 'https://tmfmp.qq.com:10180',
            changeOrigin: true,
        })
    );

}

