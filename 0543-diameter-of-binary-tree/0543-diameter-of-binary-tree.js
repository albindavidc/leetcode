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
var diameterOfBinaryTree = function(root) {
    let result = 0;

    function postOrder(node){
        if(!node) return 0;

        let left = postOrder(node.left);
        let right = postOrder(node.right);

        if(result < left + right){
            result = left + right 
        }

        return Math.max(left, right) + 1
    }

    postOrder(root)

    return result
};