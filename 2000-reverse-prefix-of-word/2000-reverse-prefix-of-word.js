/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    
    let index = word.indexOf(ch);

    word = word.split('')
    let end = index;

    for(let i = 0; i < Math.floor((index+1)/2); i++){
        let temp = word[i];
        word[i] = word[end];
        word[end] = temp;

        end--
    }

    return word.join('')
};