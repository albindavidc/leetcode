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
 * @return {number[]}
 */
var findFrequentTreeSum = function (root) {
    let frequency = new Map();
    let maxFrequency = 0;

    function dfs(node) {
        if (!node) return 0;

        const leftSum = dfs(node.left);
        const rightSum = dfs(node.right);

        let sum = node.val + leftSum + rightSum;

        let count = (frequency.get(sum) || 0) + 1
        frequency.set(sum, count);
        maxFrequency = Math.max(maxFrequency, count);

        return sum;
    };

    dfs(root);

    let result = [];

    for (let [sum, count] of frequency) {
        if (count === maxFrequency) {
            result.push(sum);
        }
    }

    return result
};