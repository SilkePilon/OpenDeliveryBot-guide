const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.js',
})
module.exports = withNextra({
  basePath: 'https://pix3lpirat3.github.io/mineflayer-guide/',
  images: {
    unoptimized: true
  }
})