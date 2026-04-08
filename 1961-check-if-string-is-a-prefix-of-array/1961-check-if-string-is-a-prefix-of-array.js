/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    
    for(let i = 0; i<=words.length; i++){
        if(words.slice(0, i).join('') === s) return true;

    }

    return false;
};