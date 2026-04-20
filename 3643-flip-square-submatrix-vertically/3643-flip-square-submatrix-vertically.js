/**
 * @param {number[][]} grid
 * @param {number} x
 * @param {number} y
 * @param {number} k
 * @return {number[][]}
 */
var reverseSubmatrix = function (grid, x, y, k) {


    for (let i = 0; i < Math.floor(k / 2); i++) {
        for (let j = 0; j < k; j++) {
            let toprow = x + i
            let bottomrow = x + k - 1 - i
            let col = y + j

            let temp = grid[toprow][col];
            grid[toprow][col] = grid[bottomrow][col]
            grid[bottomrow][col] = temp
        }
    }

    return grid
};