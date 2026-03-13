/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let result = [...triangle[triangle.length-1]];

    for(let i = triangle.length-2; i>=0; i--){
        for(let j =0; j<triangle[i].length; j++){
            result[j] = triangle[i][j] + Math.min(result[j], result[j+1])
        }
    }

    return result[0]
};