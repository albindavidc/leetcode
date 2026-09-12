/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
    const r = board.length;
    const c = board[0].length;

    let visited = Array.from(
        { length: r }, () => Array(c).fill(false)
    )
    let count = 0;

    function dfs(row, col) {
        if (row < 0 || row >= r
            || col < 0 || col >= c) {
            return;
        }

        if (board[row][col] === '.' || visited[row][col]) {
            return;
        }

        visited[row][col] = true;

        dfs(row + 1, col);
        dfs(row - 1, col);
        dfs(row, col + 1);
        dfs(row, col - 1);
    }


    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (board[i][j] === 'X' && !visited[i][j]) {
                count++
                dfs(i, j);
            }
        }
    }

    return count;
};