module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {},
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js'],
      },
    },
  },
  globals: {
    _: true,
    $api: true,
    $auth: true,
    $util: true,
    $validate: true,
    $is: true,
  },
};
