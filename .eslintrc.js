
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
    // Отключаем ненужные правила
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    
    // Стиль окончаний строк (для Windows)
    'linebreak-style': ['error', 'windows'],
    
    // Одинарные кавычки
    'quotes': ['error', 'single'],
    
    // Точки с запятой ОБЯЗАТЕЛЬНЫ (добавлено!)
    'semi': ['error', 'always'],
    
    // Отступы 2 пробела
    'indent': ['error', 2],
    
    // Висящие запятые в многострочных объектах
    'comma-dangle': ['error', 'always-multiline'],
    
    // Пустая строка в конце файла
    'eol-last': ['error', 'always'],
    
    // Нет пробелов в конце строк
    'no-trailing-spaces': 'error',
    
    // Пробелы вокруг операторов
    'space-infix-ops': 'error',
    
    // Пробел перед открывающей скобкой
    'space-before-blocks': 'error',
    
    // Пробелы после ключевых слов (if, for, while)
    'keyword-spacing': 'error',
    
    // Нет пробелов внутри скобок
    'space-in-parens': ['error', 'never'],
    
    // Пробелы внутри фигурных скобок { a: 1 }
    'object-curly-spacing': ['error', 'always'],
    
    // Нет пробелов внутри квадратных скобок [1, 2, 3]
    'array-bracket-spacing': ['error', 'never'],
    
    // Не больше 1 пустой строки подряд
    'no-multiple-empty-lines': ['error', { max: 1 }],
    
    // Запрет на var (используйте const/let)
    'no-var': 'error',
    
    // Предпочитать const (если переменная не переопределяется)
    'prefer-const': 'error',
    
    // Использовать === вместо ==
    'eqeqeq': ['error', 'always'],
    
    // Запрет на использование isNaN (используйте Number.isNaN)
    'no-restricted-globals': ['error', 'isNaN'],
  },
}