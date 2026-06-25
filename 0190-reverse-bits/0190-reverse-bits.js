/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    let binary = n.toString(2).padStart(32, '0').split('');

    let i = 0;
    let j = binary.length-1

    while(i < j){
        [binary[i], binary[j]] = [binary[j], binary[i]]
        i++
        j--
    }

    return parseInt(binary.join(''), 2)
};