/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {

    let balanced = 0;
    let swap = 0;

    for(let bracket of s){
        if(bracket === '['){
            balanced++
        }else{
            if(bracket === ']'){
                balanced--;
            }

            if(balanced < 0){
                swap++
                balanced = 1
            }
        }
    }

    return swap;
};