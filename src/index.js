
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length === 0) return [];
  const newArray = matrix.map((item, i) => {
    if (i % 2 !== 0) {
      return item.reverse()
    }
    return item
  });

  const result = [].concat(...newArray);
  return result;
}
