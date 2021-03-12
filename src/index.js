module.exports = function towelSort(matrix) {
  if (matrix && matrix.length > 0) {
    let i,
      size = matrix.length,
      result = [];
    for (i = 0; i < size; i++) {
      if (i % 2 === 0) {
        matrix[i].forEach(elementOfMatrix => result.push(elementOfMatrix));
      } else {
        matrix[i].reverse().forEach(elementOfMatrix => result.push(elementOfMatrix));
      };
    }
    return result;
  }
  return [];
}
