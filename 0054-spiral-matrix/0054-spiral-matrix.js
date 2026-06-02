/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {

    let result = [];
    let rows = matrix.length;
    let cols = matrix[0].length;

    let top = 0;
    let bottom = rows - 1;

    let left = 0;
    let right = cols - 1;

    while (top <= bottom && left <= right) {

        for (let col = left; col <= right; col++) {
            result.push(matrix[top][col])
        }
        top++
        for (let row = top; row <= bottom; row++) {
            result.push(matrix[row][right])
        }
        right--


        if (top <= bottom) {
            for (let col = right; col >= left; col--) {
                result.push(matrix[bottom][col]);
            }
            bottom--
        }

        if (left <= right) {
            for (let row = bottom; row >= top; row--) {
                result.push(matrix[row][left])
            }
            left++
        }
    }

    return result
};