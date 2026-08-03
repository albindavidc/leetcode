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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    if (!root) return false;

    function isSameTree(node1, node2) {
        if (!node1 && !node2) return true;
        if (!node1 || !node2) return false;
        if (node1.val !== node2.val) return false;

        return (
            isSameTree(node1.left, node2.left) &&
            isSameTree(node1.right, node2.right)
        )
    }

    if (isSameTree(root, subRoot)) return true;

    return (
        isSubtree(root.left, subRoot) ||
        isSubtree(root.right, subRoot)
    )

};