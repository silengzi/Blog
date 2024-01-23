const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 配置代理
  devServer: {
    proxy: {
      '/api': {
        target: 'http://123.57.246.82:8888',
        changeOrigin: true,   // 开启代理，在本地创建一个虚拟服务 
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  // devServer: {
  //   proxy: {
  //     "/api": {
  //       target: "http://123.57.246.82:8888",
  //     },
  //   },
  // },
})
