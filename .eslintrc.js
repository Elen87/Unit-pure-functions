module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'linebreak-style': ['error', 'windows'], // для Windows
    // 'linebreak-style': ['error', 'unix'], // для Mac/Linux
  },
}
