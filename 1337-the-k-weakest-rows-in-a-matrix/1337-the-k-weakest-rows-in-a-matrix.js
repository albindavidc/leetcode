/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
    let result = new Map();

    for (let i = 0; i < mat.length; i++) {
        let sol = mat[i].filter(val => val === 1)

        result.set(i, sol.length);
    }

    result = [...result].sort((a, b) => a[1] - b[1]);
    let final = [];


    for (let i = 0; i < result.length-1; i++) {
        let val = i
        while (
            i + 1 < result.length &&
            result[i+1][1] === result[i][1]) {
            if (result[i+1][0] < result[i][0]) {
                [result[i], result[i+1]] = [result[i+1], result[i]]
            }
            i++
        }

    }

    for(let i = 0; i<k; i++){
        final.push(result[i][0])
    }

    return final
};