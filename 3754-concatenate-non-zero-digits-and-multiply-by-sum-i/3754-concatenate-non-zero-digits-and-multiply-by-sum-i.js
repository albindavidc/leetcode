/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
    let nonZero = '';

    n = String(n);
    for(let i = 0; i<n.length; i++){
        if(n[i] !== '0'){
            nonZero += n[i]
        }
    }

    let result = Number(nonZero)
    let sum = String(result).split('').reduce((acc, curr) => acc + Number(curr), 0)

    return result * (sum)
};