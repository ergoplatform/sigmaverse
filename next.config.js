// Use the hidden-source-map option when you don't want the source maps to be
// publicly available on the servers, only to the error reporting
const withSourceMaps = require('@zeit/next-source-maps')({
  devtool: 'hidden-source-map'
})
const path = require('path');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  trailingSlash: true,
  images: {
    domains: ['sigma-admin.ergoplatform.com'],
  },
}

module.exports = withSourceMaps(nextConfig);
