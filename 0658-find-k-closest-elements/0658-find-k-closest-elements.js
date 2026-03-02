/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let left = 0;
    let right = arr.length - k;

    while(left < right){
        let midd = Math.floor((left + right)/2);

        if(x - arr[midd] > arr[midd + k] - x){
            left = midd +1;
        }else{
            right = midd
        }
    }

    return arr.slice(left, left+k)
};