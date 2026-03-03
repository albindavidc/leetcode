/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (n) {
    let result = n.toString().split('');

    let i = result.length - 2;
    while (i >= 0 && result[i] >= result[i + 1]) {
        i--
    }

    if(i < 0) return -1

    let j = result.length-1;
    while (result[j] <= result[i]) {
        j--
    }

    [result[i], result[j]] = [result[j], result[i]];

    let digit = result.splice(i + 1).reverse();
    result = result.concat(digit);
    let final = Number(result.join(''))
    return final > 2 ** 31 - 1 ? -1 : final

};