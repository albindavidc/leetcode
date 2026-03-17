/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let result = [];

    for(let n of num){
        while(k > 0 && result.length && result[result.length-1] > n){
            result.pop();
            k--
        }

        result.push(n);
    }


    while(k >0){
        result.pop()
        k--
    }

    let final = result.join('').replace(/^0+/, '');

    return final === '' ? '0' : final
};