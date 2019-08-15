const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.(tsx?)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
        options: { configFileName: './.storybook/tsconfig.json' },
      },
      { loader: require.resolve('react-docgen-typescript-loader') },
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });

  // Return the altered config
  return config;
};
