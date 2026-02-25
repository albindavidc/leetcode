/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function (strs) {

    function isSubsequence(str1, str2) {
        let i = 0; j = 0;

        while (i < str1.length && j < str2.length) {
            if (str1[i] === str2[j]) {
                i++
            }
            j++
        }

        return str1.length === i;
    }


    let max = -1;

    for (let i = 0; i < strs.length; i++) {
        let uncommon = true;

        for (let j = 0; j < strs.length; j++) {
            if (i !== j && isSubsequence(strs[i], strs[j])) {
                uncommon = false;
                break;
            }
        }

        if (uncommon) {

            max = Math.max(max, strs[i].length);
        }
    }

    return max
};