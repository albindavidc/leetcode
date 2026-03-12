/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {

    let mapS = new Map();
    let maxCCount = 0;

    let left = 0;
    let max = 0;

    for (let right = 0; right < s.length; right++) {

        mapS.set(s[right], (mapS.get(s[right]) || 0) + 1);
        maxCCount = Math.max(maxCCount, mapS.get(s[right]));

        if ((right - left + 1) - maxCCount > k) {
            mapS.set(s[left], mapS.get(s[left]) - 1);
            left++
        }
        
        max = Math.max(max, right - left + 1)
    }

    return max;
};