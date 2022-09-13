module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  plugins: ['simple-import-sort'],
  rules: {
    'react/prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/no-unused-prop-types': 'off',
    'react/require-default-props': 'off',
    'react/display-name': 'warn',
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^GQL_',
        argsIgnorePattern: '^_',
      },
    ],
    'no-unused-vars': 'off',
    'sort-imports': 'off',
    'simple-import-sort/sort': [
      'error',
      {
        groups: [
          [
            '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
          ],
          ['^react'],
          ['^@?\\w'],
          ['^@(/.*|$)'],
          ['^\\u0000'],
          ['^[^.]'],
          ['^\\.'],
        ],
      },
    ],
    'no-param-reassign': ['error', { props: false }],
    '@typescript-eslint/no-explicit-any': 'error',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-restricted-imports': [
      'error',
      {
        name: 'lodash',
        message:
          "Please use `import foo from 'lodash/foo'` to avoid bringing the whole lodash module into the bundle",
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      { ts: 'never', tsx: 'never' },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/test/**',
          '**/*.test.ts',
          '**/*.test.tsx',
          'src/mocks/**',
        ],
      },
    ],
    'react/jsx-props-no-spreading': [
      'error',
      { html: 'ignore', exceptions: ['FormProvider'] },
    ],
    '@next/next/no-img-element': 'off',

    // override config from https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react.js to add __typename
    'no-underscore-dangle': [
      'error',
      {
        allow: ['__typename'],
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: true,
        allowAfterThisConstructor: false,
        allowFunctionParams: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        directory: '.',
      },
    },
  },
  globals: {
    React: 'writable',
  },
};
