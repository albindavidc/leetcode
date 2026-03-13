/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function (digits) {
    digits.sort((a, b) => a - b);

    let result = new Set();

    for (let i = 0; i < digits.length; i++) {
        if (digits[i] === 0) continue;

        for (let j = 0; j < digits.length; j++) {
            if (j == i) continue;
            for (let k = 0; k < digits.length; k++) {
                if (j == k || i == k) continue;

                let num = digits[i] * 100 + digits[j] * 10 + digits[k];

                if (num % 2 === 0) {
                    result.add(num)
                }
            }
        }

    }

    return Array.from(result)

    // let result = []

    // function backtrack(final, arr){
    //     if(final.length === 3 && final[0] !== 0 && Number(final.join('')) % 2  === 0){
    //         result.push(final);
    //     }

    //     for(let i = 0; i<3; i++){
    //         final.push(arr[i])
    //         backtrack(final, arr)
    //         final.pop();
    //     }

    //     return final
    // }

    // backtrack([], digits);

    // return result


};