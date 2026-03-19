/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let check = new Set(wordDict);
    let range = new Array(s.length +1).fill(false);

    range[0] = true;

    for(let i = 1; i<=s.length; i++){
        for(let j = 0; j< i; j++){
            if(range[j] && check.has(s.substring(j, i))){
                range[i] = true;
                break;
            }
        }
    }

    return range[s.length]
};