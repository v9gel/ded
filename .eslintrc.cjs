module.exports = {
  extends: 'next/core-web-vitals',
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'airbnb-typescript', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', project: ['./tsconfig.json'] },
  plugins: ['react', '@typescript-eslint', 'prettier', 'simple-import-sort'],
  ignorePatterns: ['**/vite.config.ts', 'prettier.config.js', '.eslintrc.js'],
  rules: {
    '@typescript-eslint/no-unused-vars': 1,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'react/react-in-jsx-scope': 0,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'react/button-has-type': 0,
    'react/no-unstable-nested-components': [2, { allowAsProps: true }],
    'react/no-array-index-key': 0,
    'no-param-reassign': 0,

    'import/order': 0,
    'simple-import-sort/exports': 1,
    'simple-import-sort/imports': [
      1,
      {
        groups: [
          // External packages.
          ['^'],
          // Internal packages.
          ['^@/'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.s?css$']
        ]
      }
    ]
    // 'import/no-extraneous-dependencies': [
    //   'error',
    //   {
    //     devDependencies: ['**/*.test.tsx', '**/*.test.ts'],
    //     optionalDependencies: false,
    //     peerDependencies: false,
    //     packageDir: ['.', './client/', './api/', './parser/', './common/']
    //   }
    // ]
  }
};
