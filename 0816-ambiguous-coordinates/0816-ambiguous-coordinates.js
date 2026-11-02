/**
 * @param {string} s
 * @return {string[]}
 */
var ambiguousCoordinates = function (s) {
    let final = [];
    s = s.slice(1, -1);

    function iterating(str) {
        let result = [];
        let n = str.length;

        if (n === 1 || str[0] !== '0') {
            result.push(str)
        }

        for (let i = 1; i < n; i++) {
            if (str[0] === '0' && i !== 1) continue;
            if (str[n - 1] === '0') continue;

            result.push(str.slice(0, i) + '.' + str.slice(i))
        }

        return result;
    }

    for(let i = 1; i<s.length; i++){
        let left = iterating(s.slice(0,i));
        let right = iterating (s.slice(i));

        for(let l of left){
            for(let r of right){
                final.push(`(${l}, ${r})`)
            }
        }
    }

    return final
};