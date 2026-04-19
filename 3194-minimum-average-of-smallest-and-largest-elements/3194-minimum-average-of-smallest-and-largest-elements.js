/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {

    let result = [];

    let len = [...nums]

    for (let i = 0; i < len.length / 2; i++) {
        let max = Math.max(...nums);
        let min = Math.min(...nums);

        let index1 = nums.indexOf(max);
        let index2 = nums.indexOf(min);

        result.push((max + min) / 2)

        if (index1 > index2) {
            nums.splice(index1, 1)
            nums.splice(index2, 1)
        } else {
            nums.splice(index2, 1);
            nums.splice(index1, 1)
        }
    }

    return Math.min(...result)
};