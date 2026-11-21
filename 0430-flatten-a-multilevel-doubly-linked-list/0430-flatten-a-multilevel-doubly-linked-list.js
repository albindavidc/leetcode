/**
 * // Definition for a _Node.
 * function _Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var flatten = function (head) {
    if (!head) return head;

    let curr = head;


    while (curr) {
        if (curr.child) {
            let child = curr.child;
            let next = curr.next;

            curr.next = child;
            child.prev = curr;

            flatten(child);
            let childTail = getTail(child)

            if (next) {
                childTail.next = next;
                next.prev = childTail;
            }

            curr.child = null;
        }

        curr = curr.next
    }


    return head
};

function getTail(node) {
    let curr = node;

    while (curr.next) {
        curr = curr.next;
    }

    return curr;
}