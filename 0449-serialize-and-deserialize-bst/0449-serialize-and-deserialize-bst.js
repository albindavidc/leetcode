/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    let result = [];

    function dfs(node) {
        if (!node) {
            result.push('#');
            return
        }

        result.push(node.val)

        dfs(node.left);
        dfs(node.right)
    }

    dfs(root);

    return result.join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    let values = data.split(',');
    let index = 0;

    function dfs() {
        if (values[index] === '#') {
            index++;
            return null
        }

        let node = new TreeNode(Number(values[index++]))

        node.left = dfs();
        node.right = dfs();

        return node;
    }


    return dfs();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */