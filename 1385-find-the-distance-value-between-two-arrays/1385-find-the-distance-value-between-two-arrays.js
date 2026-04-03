/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let result = arr1.length;

    let i = arr1.length-1;

    while(i >=0){
        let j = arr2.length-1;

        while(j >= 0){
            if(Math.abs(arr1[i] - arr2[j]) <= d){
                result--;
                break;
            }
            j--
        }
        i--
    }

    return result
};