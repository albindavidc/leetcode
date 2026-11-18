/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
    let m = heights.length;
    let n = heights[0].length;

    let pacific = Array.from({ length: m }, () => new Array(n).fill(false));
    let atlantic = Array.from({ length: m }, () => new Array(n).fill(false));

    function dfs(r, c, visited) {
        visited[r][c] = true;

        const direction = [[-1, 0], [1, 0], [0, -1], [0, 1]];

        for (let [dr, dc] of direction) {
            let nr = r + dr;
            let nc = c + dc;

            if (nr < 0 || nr >= m || nc < 0 || nc >= n || heights[nr][nc] < heights[r][c] || visited[nr][nc]) continue;

            dfs(nr, nc, visited)
        }
    }

    for (let i = 0; i < m; i++) {
        dfs(i, 0, pacific);
        dfs(i, n - 1, atlantic)
    }

    for (let j = 0; j < n; j++) {
        dfs(0, j, pacific);
        dfs(m - 1, j, atlantic)
    }

    let result = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pacific[i][j] && atlantic[i][j]) {
                result.push([i, j])
            }
        }
    }


    return result
};