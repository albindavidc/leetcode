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
var rob = function(root) {
    
    function dfs(node){
        if(!node) return [0,0];

        let [leftRob, leftNoRob] = dfs(node.left);
        let [rightRob, rightNoRob] = dfs(node.right);

        let rob = node.val + leftNoRob + rightNoRob;
        let noRob = Math.max(leftRob, leftNoRob) + Math.max(rightRob, rightNoRob);

        return [rob, noRob];
    }

    let [robRoot, noRobRoot] = dfs(root);

    return Math.max(robRoot, noRobRoot)
};