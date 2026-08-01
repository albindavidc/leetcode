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
 * @return {number[]}
 */
var findMode = function(root) {
    let modes = new Map();

    function dfs(node){
        if(!node) return;

        modes.set(node.val, (modes.get(node.val) || 0) + 1)

        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);

    let result = [];
    let max = -Infinity;

    for(let [key,val] of modes){
        if(val > max){
            max = val;
            result = [key]
        }else if(val === max){
            result.push(key)
        }
    }

    return result
};