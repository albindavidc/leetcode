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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    if (!root) return [];

    let result = [];
    let queue = [root];

    while (queue.length) {

        let levelLength = queue.length;
        let level = [];


        for (let i = 0; i < levelLength; i++) {
            let node = queue.shift()

            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.unshift(level);
    }

    return result
};