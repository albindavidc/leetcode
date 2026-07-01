/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    
    let count = 0;
    let row = 1;

    while(n >= row){
        n -= row
        count++;
        row++
    }

    return count;
};