/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    
    let result = '';
    let carry = 0;

    let x = a.length - 1;
    let y = b.length - 1;

    while(x >=0 || y >=0 || carry){
        
        let bitA = x >= 0 ? Number(a[x]): 0;
        let bitB = y >= 0 ? Number(b[y]): 0;

        let sum = bitA + bitB + carry

        result = (sum % 2) + result;
        carry = Math.floor(sum /2);

        x--
        y--
    }

    return result
};