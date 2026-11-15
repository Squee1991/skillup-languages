import type { L10n, Locale } from '~/data/languages'

// Достаёт из данных текст на текущем языке сайта
export const useL10n = () => {
  const { locale } = useI18n()

  const l = <T>(value: L10n<T>): T => value[locale.value as Locale] ?? value.ru


  return { l, locale }
}
