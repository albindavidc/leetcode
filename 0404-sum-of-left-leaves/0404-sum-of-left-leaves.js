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
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
    let result = [];

    function dfs(node, left) {
        if (!node) return;
        if (!node.left && !node.right && left === true) {
            result.push(node.val)
            return
        }

        if (node.left) {
            dfs(node.left, true);
        }
        if (node.right) {
            dfs(node.right, false);
        }
    }

    dfs(root, false)


    return result.reduce((curr, acc) => curr + acc, 0);
};