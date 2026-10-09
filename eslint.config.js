import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
    { ignores: ['dist/**'] },
    js.configs.recommended,
    ...pluginVue.configs['flat/essential'],
    {
        files: ['src/**/*.{js,vue}'],
        languageOptions: { globals: globals.browser }
    },
    {
        files: ['*.config.js', 'netlify/**/*.mjs'],
        languageOptions: { globals: globals.node }
    }
]
