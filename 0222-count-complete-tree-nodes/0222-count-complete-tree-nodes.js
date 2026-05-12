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
var countNodes = function(root) {
    let result = [];

    function print(node){
        if(!node) return null
        result.push(node.val);
        print(node.left);
        print(node.right);
    }
    
    print(root)

    return result.length
};