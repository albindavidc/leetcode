/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let result = [];
    let path = [];

    function palindrome(left, right) {
        while (left < right) {
            if (s[left] !== s[right]) return false;
            left++;
            right--
        }
        return true;
    }

    function backtrack(start) {
        if (start === s.length) {
            result.push([...path]);
            return;
        }

        for (let end = start; end < s.length; end++) {
            if (palindrome(start, end)) {
                path.push(s.slice(start, end + 1));
                backtrack(end + 1);
                path.pop();
            }
        }
    }

    backtrack(0);
    return result;
};