import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["src/**/*.{ts,js}"], // Specify the file extensions here
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "no-unused-expressions": "error",
      "prefer-const": "error",
      "no-console": "warn",
    },
    ignores: ["node_modules/", "dist/"], // Add ignore patterns here
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
