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
 * @return {string}
 */
var tree2str = function (root) {
    let result = ``

    result += root.val
    if(!root.left && root.right) result += `()`

    function dfs(node) {
        if (!node) return null;

        if (node !== root) {
            if (node.left && node.right) {
                result += `(${node.val}`
                open = true;
            }

            if (node.left && !node.right) {
                result += `(${node.val}`
            }

            if (!node.left && node.right) {
                result += `(${node.val}()`
            }

            if (!node.left && !node.right) {
                result += `(${node.val})`
                return
            }


        }


        if (node.left) dfs(node.left);
        if (node.right) dfs(node.right);

        if (node !== root && (node.left || node.right)) result += `)`
    }

    dfs(root)

    return result;
};