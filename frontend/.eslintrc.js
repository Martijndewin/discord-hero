module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    // 'plugin:prettier/recommended',
    'plugin:vue/recommended'
  ],
  plugins: [
    // 'prettier',
    'vue'
  ],
  // add your custom rules here
  rules: {
  }
}
