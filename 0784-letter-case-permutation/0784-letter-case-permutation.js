/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
    let result = [];

    function backtrack(str, k) {
        if (str.length === s.length) {
            result.push(str)
            return;
        }

        let char = s[k]
        backtrack(str + char, k + 1)

        if (char.toLowerCase() !== char.toUpperCase()) {
            let transform = char !== char.toUpperCase() ? char.toUpperCase() : char.toLowerCase();
            backtrack(str + transform, k + 1)
        }

    }

    backtrack('', 0)

    return result
}
