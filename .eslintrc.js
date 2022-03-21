module.exports = {
  env: {
    node: true,
    es2021: true,
    browser: true
  },
  extends: [
    'standard',
    'standard-jsx'
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-unused-vars': 'off'
  }
}
