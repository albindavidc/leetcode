/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let result = Array.from({length: grid.length}, () => Array(grid[0].length).fill(0));

    for(let i = 0; i<grid.length; i++){
        for(let j = 0; j<grid[0].length; j++){
            if(i === 0 && j===0) result[i][j] = grid[i][j];
            else if(j === 0) result[i][j] = result[i-1][j] + grid[i][j];
            else if(i === 0) result[i][j] = result[i][j-1] + grid[i][j];
            else result[i][j] = grid[i][j] + Math.min(result[i][j-1], result[i-1][j])
        }

    }

    return result[result.length-1][result[0].length-1]
};