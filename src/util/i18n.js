const language = navigator.language || navigator.userLanguage
export const locale = language.startsWith('zh') ? 'zh' : 'en'
