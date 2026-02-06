/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    let result = nums.map(String).sort((a,b) => {
        let ab = a+b
        let ba = b+a
        return ba.localeCompare(ab)
    })

    return nums[0] === '0' ? '0' : result.join('')
};