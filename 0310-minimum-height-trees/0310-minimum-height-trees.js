/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
    if (n === 1) return [0]

    let graph = Array.from({ length: n }, () => []);
    let degree = new Array(n).fill(0);

    for (let [a, b] of edges) {
        graph[a].push(b);
        graph[b].push(a);
        degree[a]++;
        degree[b]++;
    }


    let leaves = [];
    for (let i = 0; i < degree.length; i++) {
        if (degree[i] === 1) {
            leaves.push(i);
        }
    }

    let remainingSize = n;
    while (remainingSize > 2) {
        let size = leaves.length;
        remainingSize -= size;
        let newLeaves = [];

        for (let i = 0; i < size; i++) {
            let leaf = leaves[i];

            for (let neighbour of graph[leaf]) {
                degree[neighbour]--;

                if (degree[neighbour] === 1) {
                    newLeaves.push(neighbour);
                }
            }

        }

        leaves = newLeaves
    }

    return leaves
};