/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let i = 0, j = 1;

    while(i < nums.length  && j < nums.length){
        if(nums[i] % 2 !== 0){
            let index = j;
            while(nums[index]% 2 !== 0) index += 2;

            [nums[i], nums[index]] = [nums[index], nums[i]]
        }else{
            i += 2
        }

        if(nums[j] % 2 === 0){
            let index = i;
            while(nums[index] % 2 === 0) index += 2;

            [nums[j], nums[index]] = [nums[index], nums[j]]
        }else{
            j += 2
        }
    }

    return nums
};