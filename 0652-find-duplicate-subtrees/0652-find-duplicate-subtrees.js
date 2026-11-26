/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
    let result = [];

    let hash = new Map();

    function dfs(node) {
        if (!node) return '#';

        let left = dfs(node.left);
        let right = dfs(node.right);

        let key = `${node.val}, ${left}, ${right}`

        if (!hash.has(key)) {
            hash.set(key, { count: 1, node })
        } else {
            hash.get(key).count++
        }


        return key;
    }

    dfs(root);

    for (let [key, value] of hash) {
        if (value.count > 1) {
            result.push(value.node);
        }
    }

    return result;
};