/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    if (!head) return;

    let dummy = new ListNode(0);
    dummy.next = head;

    let pre = dummy;
    for (let i = 0; i < left - 1; i++) {
        pre = pre.next
    }

    let first = pre.next;
    let second = first.next;
    for (let i = 0; i < right - left; i++) {

        first.next = second.next;
        second.next = pre.next;
        pre.next = second
        second = first.next;
        
    }

    return dummy.next
};