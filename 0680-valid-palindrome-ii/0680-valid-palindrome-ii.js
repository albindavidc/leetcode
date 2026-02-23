/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0
    let right = s.length-1
    
    function isPalindrome(l, r){
        while(l < r){
            if(s[l] !== s[r]) return false;
            l++
            r--
        }
        return true;
    }

    while(left < right){
        if(s[left] !== s[right]){
            return isPalindrome(left+1, right) || isPalindrome(left, right-1)
        }
        left++
        right--
    }

    return true;
};