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
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
    
    let result = [];

    let count = 0;
    let curr = head;

    while(curr){
        count++;
        curr = curr.next;
    }

    let size = Math.floor(count /k);
    let extra = count % k;

    curr = head;

    for(let i = 0; i<k; i++){
        let currHead = curr;

        let currPart = size;
        if(extra > 0){
            currPart++;
            extra--
        }

        for(let j = 1; j<currPart && curr; j++){
            curr = curr.next;
        }

        if(curr){
            let nextPart = curr.next;
            curr.next = null;
            curr = nextPart;
        }

        result.push(currHead);
    }

    return result
};