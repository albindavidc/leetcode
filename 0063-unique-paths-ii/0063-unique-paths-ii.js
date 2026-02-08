/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;

    if (obstacleGrid[0][0] === 1 || obstacleGrid[m-1][n-1] === 1) {
        return 0
    }

    let matrix = Array.from({ length: m }, () => Array(n).fill(0))

    matrix[0][0] = 1

    for (let i = 1; i < m; i++) {
        matrix[i][0] = obstacleGrid[i][0] === 0 ? matrix[i - 1][0] : 0
    }

    for (let i = 1; i < n; i++) {
        matrix[0][i] = obstacleGrid[0][i] === 0 ? matrix[0][i - 1] : 0
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 0) {

                matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1]
            } else {
                matrix[i][j] = 0
            }
        }
    }

    return matrix[m-1][n-1]



};