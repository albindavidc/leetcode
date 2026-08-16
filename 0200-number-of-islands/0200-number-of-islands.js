/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let countIsland = 0;

    let row = grid.length;
    let col = grid[0].length;

    function sinkLand(r, c) {
        if (r < 0 || c < 0 || r >= row || c >= col || grid[r][c] === '0') {
            return;
        }

        grid[r][c] = '0';

        sinkLand(r + 1, c);
        sinkLand(r - 1, c);
        sinkLand(r, c + 1);
        sinkLand(r, c - 1);
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === '1') {
                sinkLand(i, j);
                countIsland++;
            }
        }
    }

    return countIsland
};