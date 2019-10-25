module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "no-underscore-dangle": {"allow": ["foo_", "_bar"]}
  }
};