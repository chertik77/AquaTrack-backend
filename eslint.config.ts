import eslintTypescript from 'typescript-eslint'

export default eslintTypescript.config(eslintTypescript.configs.recommended, {
  languageOptions: {
    parser: eslintTypescript.parser,
    parserOptions: {
      warnOnUnsupportedTypeScriptVersion: false,
      sourceType: 'module'
    }
  }
})
