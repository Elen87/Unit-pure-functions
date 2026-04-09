module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // ===== ОТКЛЮЧАЕМ НЕНУЖНЫЕ ПРАВИЛА =====
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    
    // ===== СТИЛЬ ОКОНЧАНИЙ СТРОК =====
    'linebreak-style': ['error', 'windows'], // Для Windows
    
    // ===== КАВЫЧКИ =====
    'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
    
    // ===== ТОЧКИ С ЗАПЯТОЙ =====
    'semi': ['error', 'always'],
    'semi-spacing': ['error', { before: false, after: true }],
    'semi-style': ['error', 'last'],
    
    // ===== ОТСТУПЫ =====
    'indent': ['error', 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],
    
    // ===== ЗАПЯТЫЕ =====
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    
    // ===== ПУСТЫЕ СТРОКИ =====
    'eol-last': ['error', 'always'],
    'no-trailing-spaces': 'error',
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    
    // ===== ПРОБЕЛЫ =====
    'space-infix-ops': 'error',
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
    'keyword-spacing': ['error', { before: true, after: true }],
    'space-in-parens': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'computed-property-spacing': ['error', 'never'],
    'func-call-spacing': ['error', 'never'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'block-spacing': ['error', 'always'],
    
    // ===== СКОБКИ =====
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'arrow-parens': ['error', 'always'],
    
    // ===== ПЕРЕМЕННЫЕ =====
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': ['error', { VariableDeclarator: { object: true, array: false } }],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
    'one-var': ['error', 'never'],
    'no-multi-assign': 'error',
    'no-param-reassign': ['error', { props: false }],
    
    // ===== СРАВНЕНИЯ =====
    'eqeqeq': ['error', 'always'],
    'no-eq-null': 'error',
    'no-restricted-globals': ['error', 'isNaN'],
    
    // ===== ФУНКЦИИ =====
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    'consistent-return': 'error',
    'no-useless-return': 'error',
    'no-return-assign': 'error',
    
    // ===== СТРЕЛОЧНЫЕ ФУНКЦИИ =====
    'prefer-arrow-callback': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    
    // ===== СТРОКИ =====
    'prefer-template': 'error',
    'template-curly-spacing': ['error', 'never'],
    
    // ===== МАКСИМАЛЬНАЯ ДЛИНА СТРОКИ =====
    'max-len': ['error', { code: 100, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true, ignoreComments: true }],
    
    // ===== ДРУГИЕ ПРАВИЛА =====
    'no-magic-numbers': ['warn', { ignore: [0, 1, -1, 50, 15, 100] }],
    'spaced-comment': ['error', 'always', { exceptions: ['-', '+'] }],
    'no-console': 'off',
    'no-debugger': 'error',
    'no-alert': 'error',
  },
}
