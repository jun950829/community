/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "../backend/dist"),
  devServer: {
    proxy: {
      '/api' : {
        target : 'http://localhost:3000',
        changeOrigin : true,
      }
    }
  },
  configureWebpack: {
    // resolve.alias는 모듈을 더 쉽게 import, require 하게 만듭니다.
    resolve: {
      alias: {
          // '@'는 현재 프로젝트의 client/src/까지의 최종 경로를 의미합니다.
          '@': path.join(__dirname, 'src/')
      }
    }
  },
};

