/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []
    let result = [];

    let queue = [root];
    let visited = new Set();
    visited.add(root.val);

    while(queue.length){
        let size = queue.length;
        let subResult = [];

        for(let i = 0; i<size; i++){
            let curr = queue.shift();

            subResult.push(curr.val);

            for(let child of curr.children){
                queue.push(child)
            }
        }

        result.push([...subResult])
    }

    return result
};