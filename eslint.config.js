import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import stylistic from "@stylistic/eslint-plugin";
import prettier from "eslint-plugin-prettier/recommended";

export default defineConfig([
  globalIgnores(["dist", ".next", "node_modules", "generated"]),
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    plugins: {
      "@stylistic/js": stylistic,
    },
    extends: [
      prettier,
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      curly: "error",
      eqeqeq: "error",
      "no-undef": "off",
      "no-unused-vars": "off",
      "no-useless-escape": "off",

      "prettier/prettier": [
        "error",
        {
          singleQuote: false,
          singleAttributePerLine: true,
        },
      ],

      "@stylistic/js/object-curly-newline": [
        "error",
        {
          ObjectExpression: "always",
          ObjectPattern: {
            multiline: true,
          },
        },
      ],

      "@typescript-eslint/no-unused-vars": "off",
    },
  },
]);
