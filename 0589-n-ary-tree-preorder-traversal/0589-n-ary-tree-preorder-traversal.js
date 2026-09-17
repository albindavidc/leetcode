/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {

    function preOrder(node, result) {
        if (!node) return result;

        result.push(node.val)

        for (let child of node.children) {
            preOrder(child, result)
        }

        return result
    }

    return preOrder(root, [])
};