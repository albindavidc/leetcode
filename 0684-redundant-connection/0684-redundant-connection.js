/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {

    let graph = {}

    function isConnected(vertex1, vertex2) {

        let queue = [vertex1];
        let visited = new Set();
        visited.add(vertex1);

        while (queue.length) {
            let currVertex = queue.shift();

            if (currVertex === vertex2) {
                return true;
            }

            for (let neighbour of graph[currVertex]) {
                if (!visited.has(neighbour)) {
                    queue.push(neighbour);
                    visited.add(neighbour)
                }
            }
        }
        return false;

    };
    
    for (let [vertex1, vertex2] of edges) {
        if (!graph[vertex1]) graph[vertex1] = [];
        if (!graph[vertex2]) graph[vertex2] = [];

        if (isConnected(vertex1, vertex2)) {
            return [vertex1, vertex2]
        }

        graph[vertex1].push(vertex2);
        graph[vertex2].push(vertex1)
    }


}