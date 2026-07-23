/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let result = [];


    let queue = [];
    queue.push([root, `${root.val}`])
    
    while(queue.length){
        let [curr, path] = queue.shift();

        if(!curr.left && !curr.right){
            result.push(path)
        }

        if(curr.left){
            queue.push([curr.left, `${path}->${curr.left.val}` ])
        }
        if(curr.right){
            queue.push([curr.right, `${path}->${curr.right.val}`]);
        }

    }

    return result
};