module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  outputDir: "dist",
  lintOnSave: process.env.NODE_ENV !== "production",
  configureWebpack: {
    performance: {
      maxEntrypointSize: 612000,
      maxAssetSize: 842000
    }
  },
  devServer: {
    open: true,
    host: "0.0.0.0",
    port: 8080,
    https: false,
    hotOnly: false,
    compress: true,
    proxy: {
      "/api": {
        target:
          process.env.NODE_ENV === "production"
            ? "https://www.doniai.com"
            : "http://127.0.0.1:3333",
        ws: true,
        changeOrigin: true
      }
    }
  }
};
