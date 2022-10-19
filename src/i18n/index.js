import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'en',
  allowComposition: true, // you need to specify that!
  messages: {
    en: {
      hello: 'hello!'
    },
    ja: {
      helloy: 'こんにちは！'
    }
  }
})

export default i18n
console.log(i18n.allowComposition) // output is true
