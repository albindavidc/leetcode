/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.items = nums;
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    let indexs = [];

    for(let i = 0; i<this.items.length; i++){
        if(this.items[i] === target){
            indexs.push(i)
        }
    }

    let random = Math.floor(Math.random() * indexs.length);

    return indexs[random]
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */