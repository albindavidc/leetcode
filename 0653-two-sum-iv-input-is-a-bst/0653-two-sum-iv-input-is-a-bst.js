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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let result = [];

    function inorder(node){
        if(!node)return;

        inorder(node.left);
        result.push(node.val);
        inorder(node.right);
    }

    inorder(root);



    let left = 0;
    let right = result.length -1;

    while(left < right){
        let sum = result[left] + result[right]
        if(sum === k){
            return true;
        }

        if(sum  < k) left++
        else right--
    }

    return false;
};