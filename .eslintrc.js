module.exports = {
  parserOptions: {
    sourceType: "module",
  },
  env: { browser: true, es2020: true },
  extends: ["eslint:recommended"],
  rules: {
    "react-refresh/only-export-components": "warn",
  },
};
