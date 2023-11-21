const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 配置跨域
  devServer: {
    proxy: {
      '/ws': {
        target: 'http://herons.top:5280', // 代理地址
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/ws': '/ws' // 重写路径
        },
      }
    }
  }
})
