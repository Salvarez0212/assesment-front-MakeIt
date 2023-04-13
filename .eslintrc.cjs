module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
      },
      node: {
        paths: ['./src'],
        extensions: ['.js', '.jsx'],
      },
    },
  },

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'react/function-component-definition': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-shadow': 0,
    'no-nested-ternary': 0,
    'no-useless-concat': 0,
    eqeqeq: 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'jsx-a11y/label-has-associated-control': 0,
    'no-param-reassign': [2, { props: false }],
  },
};
