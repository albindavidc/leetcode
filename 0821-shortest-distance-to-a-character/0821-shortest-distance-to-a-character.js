/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let result = Array(s.length).fill(Infinity);

    let prev = -Infinity;
    for(let i = 0; i<s.length; i++){
        if(s[i] === c) prev = i;
        result[i] = i - prev
    }

    prev = Infinity;
    for(let i = s.length-1; i>=0; i--){
        if(s[i] ===c ) prev = i;
        result[i] = Math.min(result[i], prev-i)
    }

    return result
};