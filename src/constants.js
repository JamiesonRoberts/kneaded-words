export const PAGE_SIZE = 5

export const FRONT_PAGE_CATEGORIES = new Set([
  'haven',
  'motherhood',
  'poetry',
  'short-story',
  'uncategorized',
  'writing',
])

export function POST_SORT(a, b) {
  return b.data.date.valueOf() - a.data.date.valueOf()
}

export function DISPLAYIFY(string, capitalize = false) {
  const display = string.replace(/-/g, ' ')
  if (!capitalize) return display
  return display.replace(/\b\w/g, (char) => char.toUpperCase())
}
