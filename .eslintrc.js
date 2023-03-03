module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    './node_modules/ts-standard/eslintrc.json',
    'next/core-web-vitals',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      tsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-tsx-scope': 'off',
  },
}
