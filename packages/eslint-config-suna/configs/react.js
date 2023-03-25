require('@rushstack/eslint-patch/modern-module-resolution');

const rules = {
  'react/function-component-definition': [
    'error',
    {
      namedComponents: ['arrow-function'],
      unnamedComponents: ['arrow-function'],
    },
  ],
  'react/jsx-props-no-spreading': 'off',
  'react/jsx-sort-props': [
    'warn',
    { callbacksLast: true, reservedFirst: true, shorthandLast: true },
  ],
  'react/prop-types': 'off',
  'react/require-default-props': 'off',
  'salt/react-hook-dependencies': 'warn',
  'trim/argument': 'warn',
  'trim/class-name': 'warn',
};

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  env: { browser: true },
  extends: ['./base.js', 'airbnb', 'airbnb/hooks', 'plugin:react/jsx-runtime'],
  overrides: [
    {
      extends: [
        './base.js',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:react/jsx-runtime',
      ],
      files: '**/*.ts?(x)',
      plugins: ['typescript-sort-keys'],
      rules: {
        ...rules,
        '@typescript-eslint/consistent-type-exports': 'error',
        '@typescript-eslint/consistent-type-imports': 'error',
        'typescript-sort-keys/interface': 'warn',
      },
    },
  ],
  parserOptions: { ecmaVersion: 'latest' },
  plugins: ['salt', 'trim'],
  rules,
};
