/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    
    for(let i = 0; i<matrix.length; i++){
        for(let j = i+1;j<matrix.length; j++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }

    for(let mat of matrix){
        mat = mat.reverse()
    }

    return matrix
};