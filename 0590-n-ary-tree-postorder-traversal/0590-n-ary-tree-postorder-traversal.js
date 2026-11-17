/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {

    let result = [];

    function postOrder(node) {
        if (!node) return;
        for (let neighbour of node.children) {
            postOrder(neighbour);
        }

        result.push(node.val)
    }

    postOrder(root);

    return result
};