/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    const qwerty = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];

    let result = []

    for (let i = 0; i < words.length; i++) {
        let word = words[i].toLowerCase()

        for (let j = 0; j < qwerty.length; j++) {
            let l = 0;

            for (let k = 0; k < word.length; k++) {
                if (qwerty[j].includes(word[k])){
                    if (k === word.length - 1) result.push(words[i])
                } else {
                    l++
                    break;
                }
            }
        }
    }

    return result
};