/**
 * @param {string} bottom
 * @param {string[]} allowed
 * @return {boolean}
 */
var pyramidTransition = function (bottom, allowed) {

    let map = new Map();

    for (let char of allowed) {
        let pair = char.slice(0, 2);

        if (!map.has(pair)) {
            map.set(pair, [])
        }

        map.get(pair).push(char[2]);
    }

    function backtrack(str, next, inx) {
        if (str.length === 1) return true;

        if (inx === str.length - 1) {
            return backtrack(next, '', 0)
        }

        let elm = str.slice(inx, inx + 2)
        let check = map.get(elm);

        if (!check) return false;

        for (let char of check) {
            if (backtrack(str, next + char, inx + 1)) {
                return true;
            }
        }


        return false;
    }


    return backtrack(bottom, '', 0)
};