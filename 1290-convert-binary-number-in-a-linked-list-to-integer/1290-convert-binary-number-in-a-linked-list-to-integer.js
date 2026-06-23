/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let str = ''

    let curr = head;
    while(curr){
        str += curr.val
        curr = curr.next;
    }

    return Number(parseInt(str, 2))
};