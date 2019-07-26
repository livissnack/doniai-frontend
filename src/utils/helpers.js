export function sliceThreeArray(data) {
  let result = [];
  for (let i = 0, length = data.length; i < length; i += 3) {
    result.push(data.slice(i, i + 3));
  }
  return result;
}
