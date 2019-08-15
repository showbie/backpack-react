module.exports = {
  presets: [
    ['@babel/preset-env', { useBuiltIns: 'usage', debug: true }],
    '@babel/preset-react',
  ],
  plugins: [['@babel/plugin-proposal-class-properties']],
};
