import { createI18n } from 'vue-i18n'
import messages from './messages'

const lang = localStorage.getItem('')

const i18n = createI18n({
	locale: lang || 'ptBr',
	fallbackLocale: 'ptBr',
	globalInjection: true,
	legacy: false,
	messages,
})

export const getLangs = (language) => {
	const languages = {
		ptBr: {
			ptBr: 'Português',
			en: 'Inglês',
		},

		en: {
			ptBr: 'Portuguese',
			en: 'English',
		},
	}

	const l = languages[language] || languages.ptBr

	return [
		{ label: l.ptBr, value: 'ptBr' },
		{ label: l.en, value: 'en' },
	]
}

export default i18n
