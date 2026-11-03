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
 * @return {string}
 */
var smallestFromLeaf = function (root) {
    let lexico = null;

    function dfs(node, arr) {
        if (!node) return;

        arr.push(String.fromCharCode(node.val + 97))

        if (!node.left && !node.right) {
            for (let i = 0; i < arr.length; i++) {
                let str = arr.slice().reverse().join('')
                if (lexico === null || str < lexico) {
                    lexico = str
                    break;
                }
            }
        }

        dfs(node.left, arr);
        dfs(node.right, arr)
        arr.pop()
    }

    dfs(root, [])


    return lexico
};