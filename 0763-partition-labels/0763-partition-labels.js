/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    
    let result = [];
    let i = 0;

    while(i < s.length){
        let right = s.lastIndexOf(s[i]);
        let j = i;

        while(j< right){
            right = Math.max(right, s.lastIndexOf(s[j]));
            j++
        }

        result.push(right-i +1);
        i = right+1
    }

    return result
};