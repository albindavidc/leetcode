/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
    let result = [];
    let n = graph.length - 1

    function dfs(node, arr) {
        arr.push(node)

        if (node === n) {
            result.push([...arr]);
            arr.pop();
            return;
        }

        for (let neighbour of graph[node]) {
            dfs(neighbour, arr)
        }
        
        arr.pop()
    }

    dfs(0, [])

    return result
};