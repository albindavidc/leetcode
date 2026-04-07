/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    
    let convert = '';
    // let transform = '';

    for(let i = 0; i<s.length; i++){
        let pos = s[i].charCodeAt(0) - 96;

        convert += pos.toString();
    }

    for(let i = 0; i<k; i++){
        let temp = 0;

        for(let j = 0; j<convert.length; j++){
            temp += Number(convert[j])
        }

        convert = temp.toString()
    }

    return Number(convert)
};