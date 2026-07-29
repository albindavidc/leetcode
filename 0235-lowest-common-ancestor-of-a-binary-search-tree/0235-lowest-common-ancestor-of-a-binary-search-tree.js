/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let pPath = [];
    let qPath = [];

    function dfs(node, path){
        if(!node) return;

        path.push(node)

        if(node.val === p.val){
            pPath = [...path]
        }

        if(node.val === q.val){
            qPath = [...path]
        }

        dfs(node.left, path);
        dfs(node.right, path);

        path.pop()
    }

    dfs(root, []);

    let len = pPath.length < qPath.length ? pPath.length : qPath.length;

    let result = null;

    for(let i = 0; i<len; i++){
        if(pPath[i] === qPath[i]){
            result = pPath[i]
        }else {
            break;
        }
    }

    return result
};