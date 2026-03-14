/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  useTabs: false,
  tabWidth: 2,
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrderSeparation: true,
  importOrderParserPlugins: ['typescript'],
};

export default config;