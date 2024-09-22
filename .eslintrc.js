module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "google",
        "plugin:@typescript-eslint/recommended",
    ],
    parser: "@typescript-eslint/parser",
    plugins: [
        "eslint-plugin-babel",
        "@typescript-eslint",
    ],
    rules: {
        "quotes": ["error", "double"],
        "object-curly-spacing": ["error", "always"],
        "indent": ["off", "always"],
        "linebreak-style": ["off", "windows"],
        "max-len": ["off", { "code": 120 }],
        "require-jsdoc": ["off"],
    },
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
    },
};
