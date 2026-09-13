/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val === undefined ? null : val;
 *    this.children = children === undefined ? null : children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {

    let result = 0;

    function dfs(node, count) {
        if (!node) return;

        result = Math.max(result, count);

        for (let child of node.children) {
            dfs(child, count + 1)
        }
    }

    dfs(root, 1)

    return result
};