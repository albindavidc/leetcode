/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = '';
    s = s.split(' ')

    for(let i = 0; i< s.length; i++){
        let word = s[i];

        for(let j = word.length-1; j>=0; j--){
            result += word[j];
        }

        result += ' '
    }

    return result.trim()
};