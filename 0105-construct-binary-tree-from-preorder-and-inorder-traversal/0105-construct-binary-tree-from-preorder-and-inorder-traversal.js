/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length === 0 || inorder.length === 0){
        return null;
    }

    let rootVal = preorder[0]
    let tree = new TreeNode(rootVal);

    let mid = inorder.indexOf(rootVal);

    let leftinorder = inorder.slice(0, mid);
    let rightinorder = inorder.slice(mid+1);

    let leftpreorder = preorder.slice(1, mid+1);
    let rightpreorder = preorder.slice(mid+1);

    tree.left = buildTree(leftpreorder, leftinorder)
    tree.right = buildTree(rightpreorder, rightinorder)

    return tree;

};