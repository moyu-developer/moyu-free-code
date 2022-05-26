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
  globals: {
    System: true
  },
  parser: '@typescript-eslint/parser',
  rules: {
    'no-unused-vars': 'off',
    'no-useless-constructor': 'off'
  }
}
