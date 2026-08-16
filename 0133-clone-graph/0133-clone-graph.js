/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if(!node) return null;

    let result = new Map();

    function dfs(currNode){
        if(result.has(currNode)){
            return result.get(currNode);
        }

        let cloneNode = new _Node(currNode.val);
        result.set(currNode, cloneNode)

        for(let neighbour of currNode.neighbors){
            cloneNode.neighbors.push(dfs(neighbour))
        }
        return cloneNode
    }

    return dfs(node)
};