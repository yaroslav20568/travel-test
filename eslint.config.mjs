import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  { ignores: ['.next', 'out', 'build', 'node_modules', 'next-env.d.ts'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
      'no-relative-import-paths': noRelativeImportPaths,
      prettier: prettier
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
          caughtErrors: 'none'
        }
      ],
      '@typescript-eslint/no-empty-object-type': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react', '^@?\\w'],
            ['^@/app'],
            ['^@/processes'],
            ['^@/pages'],
            ['^@/widgets'],
            ['^@/features'],
            ['^@/entities'],
            ['^@/shared'],
            ['^@/'],
            ['^\\../', '^\\./'],
            ['^@/styles', '^@/modules/.+\\.s?css$', '\\.s?css$']
          ]
        }
      ],
      'simple-import-sort/exports': 'error',
      'no-restricted-syntax': [
        'error',
        {
          selector: 'ImportDeclaration[source.value=/.*\\.(ts|tsx)$/]',
          message: 'Remove .ts/.tsx file extension from import.'
        },
        {
          selector: 'ExportAllDeclaration[source.value=/.*\\.(ts|tsx)$/]',
          message: 'Remove .ts/.tsx file extension from export.'
        },
        {
          selector: 'ExportNamedDeclaration[source.value=/.*\\.(ts|tsx)$/]',
          message: 'Remove .ts/.tsx file extension from export.'
        }
      ],
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['**/index'],
              message: "Remove '/index' from import path."
            }
          ]
        }
      ],
      'no-relative-import-paths/no-relative-import-paths': [
        'error',
        {
          allowSameFolder: true,
          prefix: '@',
          rootDir: 'src'
        }
      ],
      'prettier/prettier': 'error'
    }
  }
];
