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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    let paths = [];

    function dfs(node, currPath) {
        if (!node) return;

        currPath.push(node.val);

        if (!node.left && !node.right && currPath.reduce((acc, curr) => curr + acc, 0) === targetSum) {
            paths.push([...currPath]);
        }

        dfs(node.left, currPath);
        dfs(node.right, currPath);

        currPath.pop()
    }

    dfs(root, [])

    return paths;
};