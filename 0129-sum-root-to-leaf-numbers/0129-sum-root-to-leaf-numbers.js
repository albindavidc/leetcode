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
var sumNumbers = function(root) {
    
    let result = [];

    function dfs(node, str){
        if(!node)return;
        
        
        if(!node.left && !node.right){
            result.push(Number(str + node.val))
            return
        }


        dfs(node.left, str+node.val)
        dfs(node.right, str+node.val)
    }

    dfs(root, '')

    return result.reduce((acc, curr) => curr + acc, 0)
};