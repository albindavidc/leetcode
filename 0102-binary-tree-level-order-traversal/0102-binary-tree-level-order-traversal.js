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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []
    
    let result = [];

    function traverse(nodes){
        if(nodes.length === 0) return;

        let nextLevel = [];
        let currentLevel = []

        for(let node of nodes){
            currentLevel.push(node.val)

            if(node.left){
                nextLevel.push(node.left)
            }
            
            if(node.right){
                nextLevel.push(node.right);
            }
        }

        result.push(currentLevel)

        traverse(nextLevel);
    }

    traverse([root]);

    return result
};