import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // Allow intentional _underscore-prefixed variables (e.g. compile-time validators)
      "@typescript-eslint/no-unused-vars": ["warn", { "varsIgnorePattern": "^_" }],
      // Türkçe içerik sayfalarında apostrof/tırnak kaçırma kuralı gürültü yaratıyor —
      // React JSX zaten ham `'` ve `"` karakterlerini güvenle render ediyor.
      "react/no-unescaped-entities": "off",
    },
  },
]);

export default eslintConfig;
