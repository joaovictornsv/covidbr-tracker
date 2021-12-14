export function formatNumber(num: number = 0) {
  return num && num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,').replace(',', '.').replace(',', '.')
}
