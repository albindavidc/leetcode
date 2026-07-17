/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {

    let match = false;

    let n = s.length;

    for (let i = 0; i < s.length; i++) {
        let result = s.slice(0, n - i) + s.slice(n - i);
        let result2 = s.slice(n-i) + s.slice(0, n-i)

        if (result === goal || result2 === goal) {
            match = true;
            break
        }

    }
    
    return match;
};