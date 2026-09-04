/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let left = 0;
    let right = Math.floor(Math.sqrt(c))

    while(left <= right){
        let cal = left * left + right * right;

        if(cal === c){
            return true;
        }

        if(cal > c){
            right--
        }else{
            left++
        }
    }

    return false;
};