/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
    let [row, col] = click;

    let direction = [[-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 0], [0, 1],
    [1, -1], [1, 0], [1, 1]];

    const dfs = (r, c) => {
        if (r < 0 || c < 0 || r >= board.length || c >= board[0].length || board[r][c] !== 'E') {
            return;
        }

        let mine = 0;

        for (let [dr, dc] of direction) {
            let nr = dr + r;
            let nc = dc + c;

            if (nr >= 0 && nc >= 0 && nr < board.length && nc < board[0].length && board[nr][nc] === 'M') {
                mine++
            }
        }

        if (mine > 0) {
            board[r][c] = String(mine);
            return;
        }

        board[r][c] = 'B'

        for (let [dr, dc] of direction) {
            dfs(dr + r, dc + c)
        }

    }

    if (board[row][col] === 'M') {
        board[row][col] = 'X'
    } else {
        dfs(row, col)
    }

    return board;
};