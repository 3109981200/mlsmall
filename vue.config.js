module.exports = {
  configureWebpack: {
    resolve: {
      // 配置路径别名
      alias: {
        assets: '@/assets',
        common: '@/common',
        components: '@/components',
        service: '@/service',
        views: '@/views'
      }
    }
  },
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '蘑菇Shopping',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  devServer: {
    proxy: {
      '/development': {
        target: 'http://www.codertian.top',
        changeOrigin: true,
        ws: true, // 是否启用websockets
        secure: false // 使用的是http协议则设置为false，https协议则设置为true
      }
    }
  }
}
