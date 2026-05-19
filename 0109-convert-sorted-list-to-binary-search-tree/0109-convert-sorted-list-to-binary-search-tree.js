/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
    let arr = [];
    let curr = head
    while (curr !== null) {
        arr.push(curr.val);
        curr = curr.next;
    }

    function buildTree(left, right) {
        if (left > right) return null;

        let mid = Math.floor((left + right) / 2);

        let node = new TreeNode(arr[mid]);

        node.left = buildTree(left, mid-1);
        node.right = buildTree(mid+1, right);


        return node
    }

    return buildTree(0, arr.length-1)
};