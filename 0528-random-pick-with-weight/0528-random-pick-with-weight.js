/**
 * @param {number[]} w
 */
var Solution = function (w) {
    this.prefix = [];

    let sum = 0;

    for (let weight of w) {
        sum += weight;
        this.prefix.push(sum)
    }

    this.total = sum; 
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
    let target = Math.floor(Math.random() * this.total) + 1;

    let left = 0;
    let right = this.prefix.length -1;

    while(left <= right){
        let mid = Math.floor((left + right)/2);

        if(target <= this.prefix[mid]){
            right = mid - 1
        }else{
            left = mid + 1;
        }
    }

    return left
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */