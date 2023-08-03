process.env.VUE_APP_VERSION = process.env.npm_package_version

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/kickbase-plus/' : '/',
  transpileDependencies: ['vuetify'],
}
