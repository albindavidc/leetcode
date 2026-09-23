/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
    let rL = grid.length;
    let cL = grid[0].length;

    let rowMax = Array(rL).fill(0);
    let colMax = Array(cL).fill(0);
    for (let r = 0; r < rL; r++) {
        for (let c = 0; c < cL; c++) {
            rowMax[r] = Math.max(rowMax[r], grid[r][c]);
            colMax[c] = Math.max(colMax[c], grid[r][c])
        }
    }

    let totalSum = 0;

    for (let r = 0; r < rL; r++) {
        for (let c = 0; c < cL; c++) {
            let maxAllowed = Math.min(rowMax[r], colMax[c]);

            totalSum += maxAllowed - grid[r][c]
        }
    }

    return totalSum
};