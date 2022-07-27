/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "../backend/dist"),
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
};
