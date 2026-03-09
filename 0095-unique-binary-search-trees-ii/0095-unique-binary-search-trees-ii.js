/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if(n=== 0) return 0;

    function main(start, end){
        let trees = [];
        if(start > end){
            trees.push(null);
            return trees;
        }

        for(let i =start; i<=end; i++){

            let leftTrees = main(start, i-1);
            let rightTrees = main(i+1, end);

            for(let left of leftTrees){
                for(let right of rightTrees){

                    let root = new TreeNode(i);
                    root.left = left;
                    root.right = right;

                    trees.push(root);
                }
            }
        }

        return trees
    }

    return main(1, n)
};