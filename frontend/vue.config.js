const path = require('path');

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      '/api/users/signup' : {
        target : 'http://localhost:3000',
        changeOrigin : true,
        pathRewrite : {
          '^/api' : ''
        }
      }
    }
  },
  outputDir : path.resolve(__dirname, '../backend/dist')
}
