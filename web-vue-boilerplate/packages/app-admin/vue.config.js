const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // devServer: {
  //   proxy: 'http://192.168.0.20:10001'
  // },
  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  transpileDependencies: ['@lean-bi/common'],
  chainWebpack: config => {
    config.resolve.alias
      .set('common/services', '@lean-bi/common/src/services')
      .set('common/util', '@lean-bi/common/src/util')
      .set('common', '@lean-bi/common')

    config.module
      .rule('vue')
      .use('iview')
      .loader('iview-loader')
      .options({ prefix: true })

    // modify default svg loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()

    // svg-icon
    config.module
      .rule('svg-icon')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' })
  }
}
