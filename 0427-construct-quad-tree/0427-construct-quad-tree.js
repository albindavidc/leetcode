/**
 * // Definition for a QuadTree node.
 * function _Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {_Node}
 */
var construct = function(grid) {
    function build (row, col, size){
        let value = grid[row][col];
        let same = true;

        for(let r = row; r < row+size; r++){
            for(let c = col; c < col+size; c++){
                if(grid[r][c] !== value){
                    same = false;
                    break;
                }
            }

            if(!same) break;
        }

        if(same) return new Node(value === 1, true)

        let half = size/2
        let node = new Node(true, false);

        node.topLeft = build(row, col, half)
        node.topRight = build(row, col + half, half);
        node.bottomLeft = build(row + half, col, half);
        node.bottomRight = build(row + half, col + half, half);

        return node;
    }

    return build(0, 0, grid.length)
};