module.exports = {
  root: true,
  plugins: ['eslint-plugin-cypress'],
  extends: ['kentcdodds', 'kentcdodds/import', 'plugins:cypress/recommended'],
  env: {'cypress/globals': true}
}
