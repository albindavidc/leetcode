/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
    if(!root1) return root2;
    if(!root2) return root1;
    
    let newTree = new TreeNode();

    function mergingTrees(node1, node2, node3) {
        if (!node1 && !node2) return;

        const val1 = node1 ? node1.val : 0;
        const val2 = node2 ? node2.val : 0

        node3.val = val1 + val2

        if (node1?.left || node2?.left) {
            node3.left = new TreeNode();
            mergingTrees(
                node1 ? node1.left : null,
                node2 ? node2.left : null,
                node3.left
            )
        }

        if (node1?.right || node2?.right) {
            node3.right = new TreeNode();
            mergingTrees(
                node1 ? node1.right : null,
                node2 ? node2.right : null,
                node3.right
            )
        }

        return
    }

    mergingTrees(root1, root2, newTree);

    return newTree
};