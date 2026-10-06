/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    words.sort((a,b) => a.length -b.length);

    let result = new Map();
    let longestChain = 1;

    for(let word of words){
        let longest = 1;

        for(let i = 0; i<word.length; i++){
            let val = word.slice(0, i) + word.slice(i+1);

            if(result.has(val)){
                longest = Math.max(longest, result.get(val)+1);
            }
        }

        result.set(word, longest);
        longestChain = Math.max(longest, longestChain)
    }

    return longestChain
};