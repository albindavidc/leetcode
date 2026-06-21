/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    let code = num.toString(2);
    let result = ''

    for (let i = 0; i < code.length; i++) {
        if (code[i] === '1') {
            result += 0
        } else {
            result += 1
        }
    }

    return parseInt(result, 2)
};