/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
    let minResult = Infinity;


    function recursion(num, arr){
        if(num === 1){
            minResult = Math.min(minResult, arr.length);
            return;
        }

        if(num % 2 === 0){
            arr.push(num/2);
            recursion(num/2, arr);
            arr.pop();
        }else{
            arr.push(num+1);
            recursion(num+1, arr);
            arr.pop()

            arr.push(num-1);
            recursion(num-1, arr);
            arr.pop()
        }
    }

    recursion(n, []);

    return minResult
};