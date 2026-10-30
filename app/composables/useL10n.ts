import type { L10n, Locale } from '~/data/languages'

// Достаёт из данных текст на текущем языке сайта и форматирует числа под него
export const useL10n = () => {
  const { locale } = useI18n()

  const l = <T>(value: L10n<T>): T => value[locale.value as Locale] ?? value.ru

  // 12000 → «12 000+» / «12,000+»
  const count = (n: number) => `${n.toLocaleString(locale.value)}+`

  return { l, count, locale }
}
