module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-nested-ternary': 'off',
    'vue/html-indent': ['error', 2, {
      'attribute': 1,
      'baseIndent': 1,
      'closeBracket': 0,
      'alignAttributesVertically': true,
      'ignores': []
    }],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/html-comment-indent': 'error',
    'vue/html-comment-content-newline': 'error',
    'vue/html-comment-content-spacing': 'error',
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/new-line-between-multi-line-property': 'error',
    'vue/no-empty-component-block': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/dot-notation': 'error',
    'vue/key-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/object-shorthand': 'error',
    'vue/block-tag-newline': ['error', {
      'singleline': 'always',
    }],
    'vue/no-static-inline-styles': 'error',
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 1
      },
      'multiline': {
        'max': 1
      }
    }],

    quotes: ['warn', 'single', { avoidEscape: true }],

    'object-curly-spacing': ['error', 'always'],

    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'multiline-block-like' },
      { blankLine: 'always', prev: '*', next: 'return' },
      // Sequence of variable declarations
      { blankLine: 'always', prev: '*', next: ['const', 'let'] },
      { blankLine: 'always', prev: ['const', 'let'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
    ],
    curly: ['error', 'all'],
    'max-lines': ['error', {
      max: 500,
      skipComments: true,
      skipBlankLines: true,
    }],
    'no-multiple-empty-lines':  ['error', { 'max': 1, 'maxEOF': 0 }],
    'no-trailing-spaces': 'error',

    // The core 'no-unused-vars' rules (in the eslint:recommended ruleset)
    // does not work with type definitions
    'no-unused-vars': 'off',

    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
