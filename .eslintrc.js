module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'no-use-before-define': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-props-no-spreading': 'off',
    'max-len': ['error', { ignoreComments: true, code: 120 }],
  },
};
