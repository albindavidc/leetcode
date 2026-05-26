/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let lower = new Set();
    let upper = new Set();

    for(let char of word){
        if(char === char.toLowerCase()){
            lower.add(char)
        }else{
            upper.add(char)
        }
    }

    let count = 0
    for(let char of lower){
        if(upper.has(char.toUpperCase())) count++;
    }

    return count
};