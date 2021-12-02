import LocalizedStrings from 'react-localization'
import { LANGUAGE } from '../Components/General/StaticKeys'
import en from './en'
import ar from './ar'

export const strings = new LocalizedStrings({
  en,
  ar,
})

export const toogleLanguage = (lang) => {
  if (lang === 'en') {
    localStorage.removeItem(LANGUAGE)

    strings.setLanguage('en')
    localStorage.setItem(LANGUAGE, 'en')
  } else {
    localStorage.removeItem(LANGUAGE)

    strings.setLanguage('ar')
    localStorage.setItem(LANGUAGE, 'ar')
  }
  window.location.reload()
}

export const changeLanguage = () => {
  let lang = localStorage.getItem(LANGUAGE)
  if (lang !== null) {
    if (lang === 'en') {
      strings.setLanguage('en')
      document.documentElement.setAttribute('dir', 'ltr')
      document.documentElement.setAttribute('lang', 'en')
    } else {
      strings.setLanguage('ar')
      document.documentElement.setAttribute('dir', 'rtl')
      document.documentElement.setAttribute('lang', 'ar')
    }
  } else {
    strings.setLanguage('ar')
    localStorage.setItem(LANGUAGE, 'ar')
    document.documentElement.setAttribute('dir', 'rtl')
    document.documentElement.setAttribute('lang', 'ar')
  }
}

export const getLanguage = () => {
  let lang = localStorage.getItem(LANGUAGE)
  if (lang !== null) {
    return lang
  }
}

export const changeDirection = () => {
  let dir = getLanguage() === 'en' ? 'ltr' : 'rtl'
  return dir
}
