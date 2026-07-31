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
var findBottomLeftValue = function (root) {
    if (!root) return null;

    let queue = [root];

    let leftVal = root.val;

    while (queue.length > 0) {
        let size = queue.length;

        leftVal = queue[0].val

        for (let i = 0; i < size; i++) {
            let node = queue.shift();

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right);
        }
    }

    return leftVal
};