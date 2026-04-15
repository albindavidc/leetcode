/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
    
    let result = 0;

    let temp = [...nums]

    for(let i = 0 ; i<Math.floor(temp.length/2); i++){
        let num1 = nums.shift().toString()
        let num2 = nums.pop().toString()
        let concat = num1.concat(num2);

        result += Number(concat)
    }

    if(nums.length > 0){
        result += Number(nums[0])
    }

    return result
};