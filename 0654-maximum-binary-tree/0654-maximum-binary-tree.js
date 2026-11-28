/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    if(nums.length === 0) return null;

    let maxIndex = nums.indexOf(Math.max(...nums));

    let root = new TreeNode(nums[maxIndex]);
    let left = nums.slice(0, maxIndex);
    let right = nums.slice(maxIndex+1);

    root.left = constructMaximumBinaryTree(left);
    root.right = constructMaximumBinaryTree(right);

    return root
};