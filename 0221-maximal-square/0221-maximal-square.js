/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let arr = Array.from({ length: rows }, () => Array(cols).fill(0));
    let maxSize = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === '1') {
                if (i === 0 || j === 0) {
                    arr[i][j] = 1
                } else {
                    arr[i][j] = 1 + Math.min(arr[i - 1][j], arr[i][j - 1], arr[i - 1][j - 1]);
                }
            }

            maxSize = Math.max(maxSize, arr[i][j])
        }
    }

    return maxSize * maxSize
};