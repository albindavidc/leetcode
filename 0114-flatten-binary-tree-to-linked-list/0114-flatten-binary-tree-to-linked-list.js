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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    let prev = null;

    function traverse (node){
        if(!node) return null;

        traverse(node.right);
        traverse(node.left);

        node.right = prev;
        node.left = null;


        prev = node
    }

    traverse(root);
};