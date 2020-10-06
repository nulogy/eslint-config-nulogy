// TODO: Add eslint-config-react-app

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:eslint-comments/recommended",
    "plugin:json/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["import"],
  rules: {
    "import/order": "error",
    "no-mixed-operators": ["error", { allowSamePrecedence: true }],
    "no-unused-vars": [
      "error",
      { args: "after-used", argsIgnorePattern: "^_", ignoreRestSiblings: true },
    ],
    "prefer-template": "error",
    "prettier/prettier": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-curly-brace-presence": [
      "error",
      { props: "never", children: "ignore" },
    ],
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
    "react/prop-types": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "eslint:recommended",
        "plugin:eslint-comments/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "prettier/react",
        "prettier/@typescript-eslint",
      ],
      parser: "@typescript-eslint/parser",
      rules: {
        "no-mixed-operators": ["error", { allowSamePrecedence: true }],
        "prefer-template": "error",
        "prettier/prettier": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react-hooks/rules-of-hooks": "error",
        "react/jsx-curly-brace-presence": [
          "error",
          { props: "never", children: "ignore" },
        ],
        "react/prop-types": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-empty-function": [
          "error",
          { allow: ["arrowFunctions"] },
        ],
        "@typescript-eslint/no-unused-vars": [
          "error",
          { args: "after-used", argsIgnorePattern: "^_" },
        ],
      },
      settings: {
        react: {
          version: "detect",
        },
      },
    },
    {
      files: ["*.jsx", "*.tsx"],
      rules: {
        // explicit-module-boundary-types disabled because this enforces all
        // React functional components to need a return type. We felt like this
        // was too verbose and we are okay with relying on other existing TSC
        // functionality to catch functions with implicit-any return types being
        // used.
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
    {
      files: ["**/__generated__/*"],
      rules: {
        "eslint-comments/disable-enable-pair": "off",
        "eslint-comments/no-unlimited-disable": "off",
      },
    },
  ],
};
