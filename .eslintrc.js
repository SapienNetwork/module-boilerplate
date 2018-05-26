module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  rules: {
    'comma-dangle': [
      'warn',
      'never'
    ],
    indent: [
      'warn',
      2
    ],
    'linebreak-style': [
      'warn',
      'unix'
    ],
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'always'
    ],
    'no-underscore-dangle': 'off',
    'no-unused-expressions': 'warn',
    'no-useless-concat': 'warn',
    'block-scoped-var': 'error',
    'consistent-return': 'error',
    'import/no-extraneous-dependencies': ['off', {
      'devDependencies': [
        'build/*.js',
        'config/*.js',
        'src/test/*.js',
        'storybook/**/*.js',
        'src/**/*stories.js',
      ],
      'peerDependencies': false,
      'optionalDependencies': false,
    }],
  }
};
