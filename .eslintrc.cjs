module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended', 'plugin:jsx-a11y/recommended'],
  globals: {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: true,
  },
  plugins: ['react-hooks', 'import', 'unused-imports', 'jsx-a11y', 'no-relative-import-paths'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // js basic rules
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'arrow-body-style': 'off',
    'no-fallthrough': 2,

    // react rules
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies,
    'react/jsx-curly-brace-presence': 'warn',
    'react/no-unescaped-entities': 'off',

    // a11y
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/no-autofocus': 'off',

    // new lines rules
    'import/newline-after-import': 'error',
    'object-curly-newline': 'error',
    'newline-before-return': 'error',
    'newline-after-var': 'error',
    'eol-last': 'error',

    // import rules
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'no-relative-import-paths/no-relative-import-paths': ['warn', { allowSameFolder: true, rootDir: 'src' }],
    'import/no-unused-modules': ['off', { unusedExports: true, missingExports: true }],
    'unused-imports/no-unused-imports-ts': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'plugin:import/typescript'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: ['default', 'variable', 'property', 'objectLiteralProperty', 'method'],
            format: ['camelCase', 'PascalCase'],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid',
          },
          {
            selector: ['objectLiteralProperty'],
            format: ['camelCase'],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid',
          },
          {
            selector: 'variable',
            modifiers: ['const'],
            format: ['UPPER_CASE', 'camelCase'],
          },
          {
            selector: 'variable',
            types: ['function'],
            format: ['camelCase', 'PascalCase'],
          },
          {
            selector: ['enum', 'class'],
            format: ['PascalCase'],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid',
          },
          {
            selector: 'enumMember',
            format: ['UPPER_CASE'],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid',
          },
          {
            selector: ['typeAlias', 'typeParameter'],
            prefix: ['T'],
            format: ['PascalCase'],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid',
          },
          {
            selector: 'interface',
            prefix: ['I'],
            format: ['PascalCase'],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid',
          },
          {
            selector: 'variable',
            modifiers: ['destructured'],
            format: null,
          },
          {
            selector: [
              'classProperty',
              'objectLiteralProperty',
              'typeProperty',
              'classMethod',
              'objectLiteralMethod',
              'typeMethod',
              'accessor',
              'enumMember',
            ],
            format: null,
            modifiers: ['requiresQuotes'],
          },
          {
            selector: ['parameter'],
            format: ['camelCase', 'PascalCase'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'forbid',
          },
        ],
      },
    },
    {
      files: ['*.test.*', '*.spec.*', 'src/pages/**/*', '*.js', 'scripts/**/*'],
      rules: {
        'import/no-unused-modules': 0,
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/external-module-folders': ['node_modules'],
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};
