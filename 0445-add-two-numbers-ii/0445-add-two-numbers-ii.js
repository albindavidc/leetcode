/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let arrL1 = [];
    let arrL2 = [];

    while(l1){
        arrL1.push(l1.val);
        l1 = l1.next;
    }
    while(l2){
        arrL2.push(l2.val);
        l2 = l2.next;
    }

    let carry = 0;
    let head = null;

    while(arrL1.length || arrL2.length || carry){

        let sum = carry;

        if(arrL1.length) sum += arrL1.pop();
        if(arrL2.length) sum += arrL2.pop();

        carry = Math.floor(sum / 10);

        let node = new ListNode(sum % 10);
        node.next = head;
        head = node;
    }

    return head;
};