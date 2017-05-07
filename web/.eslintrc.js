module.exports = {
    rules: {
        indent: [2, 2],
        quotes: [2, "double"],
        "linebreak-style": [2, "unix"],
        semi: [2, "never"],
    },
    env: {
        es6: true,
        browser: true,
    },
    extends: "eslint:recommended",
    parserOptions: {
      ecmaVersion: 6,
      sourceType: "module",
      ecmaFeatures: {
          jsx: true,
      }
  },
}
