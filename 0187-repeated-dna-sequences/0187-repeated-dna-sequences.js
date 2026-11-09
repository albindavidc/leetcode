/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
    if (s.length < 10) return [];

    let map = new Map();

    let i = 0;
    let j = 10;

    while (j <= s.length) {
        let curr = s.slice(i, j)
        map.set(curr, (map.get(curr) || 0) + 1)

        i++
        j++
    }

    let result = [];

    for (let [key, value] of map) {
        if (value > 1) {
            result.push(key);
        }
    }

    return result

};