/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) return false;

    let needed = Array(26).fill(0);
    let window  = Array(26).fill(0);
    for(let num of s1){
        needed[num.charCodeAt(0) - 97]++
    }

    let left = 0;
    for(let right = 0; right<s2.length; right++){
        window[s2[right].charCodeAt(0) - 97]++;

        if(right-left+1 > s1.length){
            window[s2[left].charCodeAt(0) - 97]--
            left++
        }

        if(needed.toString() === window.toString()){
            return true;
        }
    }

    return false;
};