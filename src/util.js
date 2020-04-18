export function add (x, y) {
  // 数字是字符串，能不能转换成纯数字
  // x = toNumber(x)
  // y = toNumber(y)

  if (x == parseInt(x)) {
    x = Number(x)
  }
  if (y == parseInt(y)) {
    y = Number(y)
  }
  return x + y
}
// function toNumber (x) {
//   if (Number(x) === parseInt(x)) {
//     x = Number(x)
//     return x
//   }
// }
