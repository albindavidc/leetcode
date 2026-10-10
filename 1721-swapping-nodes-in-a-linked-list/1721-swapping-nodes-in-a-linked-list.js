/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let len = 0;
    let curr  = head;
    while(curr){
        curr = curr.next;
        len++
    }

    curr = head;
    let node1 = null;
    let node2 = null;

    for(let i = 1; i<=len; i++){
        if(i === k){
            node1 = curr
        }

        if(i === len - k + 1){
            node2 = curr
        }
        curr = curr.next
    }

    [node1.val, node2.val] = [node2.val, node1.val]

    return head;
};