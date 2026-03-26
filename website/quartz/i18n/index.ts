import { Translation, CalloutTranslation } from "./locales/definition"
import enGb from "./locales/en-GB"
import tr from "./locales/tr-TR"

export const TRANSLATIONS = {
  "en-GB": enGb,
  "tr-TR": tr,
} as const

export const defaultTranslation = "en-GB"
export const i18n = (locale: ValidLocale): Translation => TRANSLATIONS[locale ?? defaultTranslation]
export type ValidLocale = keyof typeof TRANSLATIONS
export type ValidCallout = keyof CalloutTranslation
