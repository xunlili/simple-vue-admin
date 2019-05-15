module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
  ],
  rules: {
    'object-curly-spacing': [2, 'always'], // 强制在花括号中使用一致的空格
    'object-curly-newline': [0],
    'no-const-assign': [0],
    'prefer-const': [0],
    'no-path-concat': [0], // 不准拼接路由
    'guard-for-in': [0], // 束缚for in的使用
    'no-param-reassign': [0], // 不允许给函数的参数复制
    'no-underscore-dangle': [0], // 不准用下划线命名
    'no-console': 'off',
    'no-debugger': 'off',
    'max-len': ['error', { code: 300 }],
    'linebreak-style': 'off',
    "vue/no-use-v-if-with-v-for": 'off',
    "vue/no-use-v-if-with-v-for": ["error", {
      "allowUsingIterationVar": true
    }],
    "vue/no-use-v-if-with-v-for": 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
