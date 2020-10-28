module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json', // Required to have rules that rely on Types.
    tsconfigRootDir: './'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
  }
}
