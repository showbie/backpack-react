module.exports = {
  extends: ['@showbie'],
  plugins: ['typescript'],
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      parser: 'typescript-eslint-parser',
    },
  ],
};
