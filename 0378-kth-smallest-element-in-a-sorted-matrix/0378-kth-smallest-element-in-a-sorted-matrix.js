/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    

    let result = [];

    for(let i = 0; i<matrix.length; i++){
        for(let j = 0; j<matrix[0].length; j++){
            result.push(matrix[i][j])
        }
    }

    result.sort((a,b) => a-b)
    return result[k-1]
};