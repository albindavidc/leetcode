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
var rotateRight = function(head, k) {
    if(!head || !head.next || k===0) return head;

    let length = 1
    let tail = head;
    while(tail.next){
        tail = tail.next
        length++
    }

    k = k % length
    if(k === 0) return head;

    tail.next = head;
    let step = length - k
    let newTail = head;

    for(let i = 1; i<step; i++){
        newTail = newTail.next
    }

    let newHead = newTail.next;
    newTail.next = null;

    return newHead
};