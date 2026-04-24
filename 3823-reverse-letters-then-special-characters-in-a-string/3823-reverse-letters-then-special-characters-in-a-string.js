/**
 * @param {string} s
 * @return {string}
 */
var reverseByType = function(s) {
    let letters = s.split('').filter(lett => /[a-z]/.test(lett)).reverse()
    let special = s.split('').filter(spe => /[^a-z]/.test(spe)).reverse();

    let result = [];

    let i = 0;
    let j = 0;
    for(let k = 0; k<s.length; k++){
        if(/[a-z]/.test(s[k])){
            result.push(letters[i])
            i++
        }else{
            result.push(special[j])
            j++
        }
    }


    return result.join('')
};