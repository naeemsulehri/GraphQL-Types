const withImages = require('next-images')
const configureModules = (members, config, options) => {
  return members.reduce((agg, { webpack }) => webpack(agg, options), config)
}

const webpack = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.graphql$/,
      exclude: /node_modules/,
      use: [options.defaultLoaders.babel, { loader: 'graphql-let/loader' }],
    })

    config.module.rules.push({
      test: /\.graphqls$/,
      exclude: /node_modules/,
      use: ['graphql-let/schema/loader'],
    })

    config.module.rules.push({
      test: /\.ya?ml$/,
      type: 'json',
      use: 'yaml-loader',
    })
    return config
  },
}

module.exports = {
  webpack(config, options) {
    configureModules([webpack, withImages()], config, options)
    return config
  },
  env: Object.fromEntries(
    Object.entries(process.env).filter(([key]) => key.startsWith('NEXT_APP'))
  ),
}
