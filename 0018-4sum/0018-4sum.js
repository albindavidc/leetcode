/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums = nums.sort((a,b) => a-b);
    let result = [];
    let n = nums.length;

    for(let i = 0; i<n-3; i++){
        if(i>0 && nums[i] === nums[i-1]) continue;
        for(let j = i+1; j<n-2; j++){
            if(j> i+1 && nums[j] === nums[j-1]) continue;

            let left = j +1;
            let right = n -1;

            while(left < right){
                let sum = nums[i] + nums[j] + nums[left] + nums[right];

                if(sum === target){
                    result.push([nums[i], nums[j], nums[left], nums[right]]);

                    while(nums[left] === nums[left +1]) left++;
                    while(nums[right] === nums[right-1]) right--;

                    left++;
                    right--;
                }else if(sum < target){
                    left++;
                }else{
                    right--;
                }
            }
        }
    }

    return result
};