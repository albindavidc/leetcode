/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, dictionary) {
    let best = '';

    for (let word of dictionary) {
        if (isSubsequence(word, s)) {
            if (best.length < word.length || (best.length === word.length && word < best)) {
                best = word
            }
        }
    }

    return best;
};

function isSubsequence(word, s){
    let i = 0; 
    let j = 0;

    while(i < word.length && j < s.length){
        if(word[i] === s[j]){
            i++
        }
        j++
    }

    return word.length === i
}