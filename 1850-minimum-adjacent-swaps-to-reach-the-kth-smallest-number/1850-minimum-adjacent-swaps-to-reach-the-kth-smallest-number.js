/**
 * @param {string} num
 * @param {number} k
 * @return {number}
 */
var getMinSwaps = function(num, k) {
    let target = num

    for(let i = 0; i<k; i++){
        target = nextPermutation(target);
    }

    let arr = num.split('');
    let swaps = 0;

    for(let i = 0; i<arr.length; i++){
        if(target[i] === arr[i]) continue;

        let j = i+1;
        while(arr[j] !== target[i]){
            j++
        }

        while(j > i){
            [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
            j--;
            swaps++
        }
    }

    return swaps
};

function nextPermutation(arr){
    arr = arr.split('');

    let i = arr.length-2
    while(i >= 0 && arr[i] >= arr[i+1]){
        i--
    }

    let j = arr.length-1;
    while(arr[j] <= arr[i]){
        j--
    }

    [arr[i], arr[j]] = [arr[j], arr[i]]

    let left = i+1;
    let right = arr.length -1;

    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr.join('')
}