/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {

    let result = '';
    let ptr = 0;

    for (let i = 0; i < s.length; i++) {
        if(ptr < spaces.length && i === spaces[ptr]){
            result += ' '

            ptr++;
        }

        result += s[i];
    }

    return result
};