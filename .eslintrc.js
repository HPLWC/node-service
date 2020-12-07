module.exports = {
  root: true,
  env: {
    'browser': true,
    'node': true
  },
  globals: {
    'require': true
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'semi': ['error', 'never'],
    'eqeqeq': 'error',
    'max-len': ['error', 80, 2],
    'comma-dangle': ['error', 'never'],

    // 定义
    'no-undef': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': [
      'error', { 'functions': false }
    ],
    'no-var': 'error',
    'no-invalid-regexp': 'error',
    'no-cond-assign': 'error',
    'no-empty': 'error',
    'no-multi-spaces': 'error',

    // 引号类型
    'quotes': ['error', 'single'],
    // 'quote-props': ['error', 'as-needed'],

    // 空格标准
    'arrow-spacing': [
      'error',
      {
        'before': true,
        'after': true
      }
    ],
    'array-bracket-spacing': ['error', 'never'],
    'comma-spacing': [
      'error',
      {
        'before': false,
        'after': true
      }
    ],
    'key-spacing': [
      'error',
      {
        'mode': 'strict',
        'beforeColon': false,
        'afterColon': true
      }
    ],
    'keyword-spacing': [
      'error',
      {
        'before': true,
        'after': true
      }
    ],
    'no-whitespace-before-property': 'error',
    'template-curly-spacing': ['error', 'never'],
    'no-irregular-whitespace': 'error',
    'space-infix-ops': [
      'error', { 'int32Hint': false }
    ],
    'space-before-function-paren': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],

    // 换行
    'lines-around-comment': [
      'error', { 'beforeBlockComment': true }
    ],
    'lines-between-class-members': ['error', 'always'],
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 1,
        'maxEOF': 1
      }
    ]
  }
}
