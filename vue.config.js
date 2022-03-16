const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      //配置跨域  凡是以/api开头的都是跨域
      //   /api/list ==== http://localhost:8888/api/list---->最终形态成为http://localhost:8888/list
      "/api": {
        target: "http://192.168.1.98:3000", //这里后台的地址模拟的;应该填写你们真实的后台接口
        changOrigin: true, //允许跨域
        pathRewrite: {
          /* 重写路径，当我们在浏览器中看到请求的地址为：http://localhost:8080/api/core/getData/userInfo 时
            实际上访问的地址是：http://121.121.67.254:8185/core/getData/userInfo,因为重写了 /api
           */
          "/api": "",
        },
      },
    },
  },
});
