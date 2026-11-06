/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function (ages) {
    ages.sort((a, b) => a - b)
    let result = 0;

    let left = 0;
    let right = 0;
    for (age of ages) {

        while (left < ages.length && ages[left] <= 0.5 * age + 7) {
            left++
        }
        while (right < ages.length && ages[right] <= age) {
            right++
        }

        result += Math.max(0, right - left - 1)

    }

    return result
};