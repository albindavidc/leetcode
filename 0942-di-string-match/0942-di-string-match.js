/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let i = 0;
    let j = s.length;

    let result = [];

    for(let char of s){
        if(char === 'I'){
            result.push(i++)
        }else{
            result.push(j--)
        }
    }

    result.push(i)

    return result
};