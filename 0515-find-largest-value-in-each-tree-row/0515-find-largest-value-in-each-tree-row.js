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
var largestValues = function (root) {
    if(!root) return [];

    let result = [];
    let queue = [root]

    while (queue.length) {
        let size = queue.length;

        let largest = -Infinity

        for (let i = 0; i < size; i++) {
            let node = queue.shift();

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);

            largest = Math.max(largest, node.val)
        }

        result.push(largest)
    }

    return result
};