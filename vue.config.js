const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",

  devServer: {
    host: "0.0.0.0",
    port: 8080,
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/styles/variables.scss";
          @import "~@/styles/fonts.scss";
          @import "~@/styles/mixins.scss";
        `,
      },
    },
  },
});
