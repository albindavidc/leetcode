/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {

    let i = 0;
    let j = s.length - 1;

    while (i < j && s[i] === s[j]) {
        let char = s[i];

        while (i <= j && (s[i] === char || s[j] === char)) {
            if (s[i] === char) i++
            if (s[j] === char) j--
        }
    }

    return j - i +1 < 1 ? 0 : j - i + 1

};