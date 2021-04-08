module.exports = {
  publicPath: '/Moogle',
  chainWebpack: config => {
    config.module
      .rule('svg')
      .use('file-loader')
      .tap(options => {
        options.name = '[name].[ext]'
        return options
      })
  },
  css: {
    extract: {
      filename: '[name].css',
      chunkFilename: '[name].css'
    }
  },
  configureWebpack: {
    output: {
      filename: '[name].js',
      chunkFilename: '[name].js'
    }
  }
}
