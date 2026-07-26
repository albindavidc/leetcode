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
 * @return {boolean}
 */
var isValidBST = function(root) {
    
    let prev = null;

    function inorder(node){
        if(!node) return true;

        if(!inorder(node.left)) return false;

        if(prev !== null && node.val <= prev){
            return false
        }

        prev = node.val;

        return inorder(node.right);
    }

    return inorder(root);
};