module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  settings: {
    'import/resolver': 'nuxt',
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'airbnb-base',
  ],
  plugins: [
    'vue',
  ],
  // add your custom rules here
  rules: {
    'max-len': 0,
  }
}
