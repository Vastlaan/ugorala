module.exports = {
    webpackDevMiddleware: config => {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
  
      return config
    },
    images: {
      domains: ["michalantczakblogresources.s3.eu-central-1.amazonaws.com", "s3.eu-central-1.amazonaws.com"]
    }
  }