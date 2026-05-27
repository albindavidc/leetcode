/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let lower = new Map();
    let upper = new Map();

    for(let i =0; i< word.length; i++){
        let char = word[i];

        if(char === char.toLowerCase()){
            lower.set(char, i)
        }

        else if(!upper.has(char)){
            upper.set(char,i);
        }
    }

    let count = 0;

    for(let [char, idx] of lower){
        if(upper.has(char.toUpperCase() )&& idx < upper.get(char.toUpperCase())){
            count++
        }
    }

    return count
};