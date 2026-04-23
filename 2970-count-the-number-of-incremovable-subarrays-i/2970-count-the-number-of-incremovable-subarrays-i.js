/**
 * @param {number[]} nums
 * @return {number}
 */
var incremovableSubarrayCount = function(nums) {
    
    function isIncreasing(arr){
        for(let i = 1; i<arr.length; i++){
            if(arr[i-1] >= arr[i]) return false;
        }

        return true;
    }


    let n = nums.length;
    let count = 0;


    for(let i = 0; i<n; i++){
        for(let j = i;  j<n; j++){
            let left = nums.slice(0, i);
            let right = nums.slice(j+1);

            let merged = left.concat(right);

            if(isIncreasing(merged)){
                count++
            }
        }
    }

    return count
};