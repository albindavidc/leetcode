/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function (boxGrid) {
    let r = boxGrid.length;
    let c = boxGrid[0].length;

    let result = Array.from({ length: c }, () => new Array(r).fill('.'));

    for (let i = 0; i< r; i++) {
        let idx = c - 1;

        for (let j = c - 1; j >= 0; j--) {
            if (boxGrid[i][j] === '*') {
                idx = j -1
            } else if (boxGrid[i][j] === '#'){
                boxGrid[i][j] = '.';
                boxGrid[i][idx] = '#';
                idx--
            }
        }

    }

    for(let i = 0; i < r; i++){
        for(let j = 0; j < c; j++){
            result[j][r-1-i] = boxGrid[i][j]
        }
    }

    return result
};