import { createI18n } from 'vue-i18n'
import messages from './messages'

const i18n = createI18n({
  locale: 'ptBr',
  fallbackLocale: 'ptBr', // you need to specify that!
  globalInjection: true,
  legacy: false,
  messages
})

export const getLangs = (t) => ([
  { label: t('lang.ptBr'), value: 'ptBr' },
  { label: t('lang.en'), value: 'en' }
])
export default i18n
console.log(i18n.allowComposition) // output is true
