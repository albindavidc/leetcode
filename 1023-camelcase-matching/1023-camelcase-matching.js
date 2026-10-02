/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function (queries, pattern) {
    let result = [];

    for (let i = 0; i < queries.length; i++) {
        let k = 0
        let isMatch = true;

        for (let j = 0; j < queries[i].length; j++) {
            if (queries[i][j] === pattern[k]) {
                k++
            }else if(queries[i][j] >= 'A' && queries[i][j] <= 'Z'){
                isMatch = false;
                break;
            }
        }

        isMatch && k === pattern.length ? result.push(true) : result.push(false)
    }

    return result
};