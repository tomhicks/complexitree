module.exports = {
    rules: {
        indent: [2, 2],
        quotes: [2, "double"],
        "linebreak-style": [2, "unix"],
        semi: [2, "never"],
    },
    env: {
        es6: true,
        node: true,
    },
    plugins: ["react"],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
}
