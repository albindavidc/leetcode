/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    
    let count = 0;
    pairs.sort((a,b) => a[1] - b[1]);

    let prev = -Infinity;


    for(let [left, right] of pairs){
        if(left > prev){
            count++
            prev = right
        }
    }

    return count
};