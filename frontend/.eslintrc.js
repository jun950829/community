module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    // "@vue/prettier",
    // "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    project : "./tsconfig.json",
    ecmaVersion : 2020,
    sourceType : "module"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-vars" : "off",
    // "prettier/prettier" :[
    //   "error",
    //   {
    //     endOfLine : "auto",
    //   }
    // ]
  },
};
