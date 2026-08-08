/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let newMap = new Map();

    for (let ele of s) {
        newMap.set(ele, (newMap.get(ele) || 0) + 1);
    }

    let values = [...newMap]

    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length - 1 - i; j++) {
            if (values[j][1] < values[j + 1][1]) {
                [values[j], values[j + 1]] = [values[j + 1], values[j]]
            }
        }
    }

    let result = '';

    for (let [val, count] of values) {
        result += val.repeat(count)
    }

    return result;
};