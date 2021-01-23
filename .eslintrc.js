module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': ["error", { "code": 250 }],
    "linebreak-style": 0,
    'func-names': ["error", "always", { "generators": "as-needed" }],
    'no-use-before-define': ["error", { "functions": false, "classes": false }],
    'no-param-reassign': ["error", { "props": false }]
  },
};
