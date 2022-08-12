module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
  },
  root: true,
  env: {
    'node': true,
    'vue/setup-compiler-macros': true,
  },
  extends: ['@antfu'],
}
