/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums) {
    let max = 0;
    let mask = 0;

    for (let i = 30; i >= 0; i--) {
        mask = mask | (1 << i);

        let prefixes = new Set();
        for (let num of nums) {
            prefixes.add(num & mask)
        }

        let candidate = max | (1 << i);
        for (let prefix of prefixes) {
            if (prefixes.has(prefix ^ candidate)) {
                max = candidate;
                break;
            }
        }
    }

    return max
};