/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let r = matrix.length;
    let c = matrix[0].length;

    let row = 0;
    let col = c - 1;

    while(row < r && col >= 0){
        if(matrix[row][col] === target) return true;

        if(matrix[row][col] > target){
            col--
        }else{
            row++
        }
 
   }

   return false;
};