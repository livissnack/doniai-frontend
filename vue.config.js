module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://api.doniai.com/",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "/"
        }
      }
    }
  },
};