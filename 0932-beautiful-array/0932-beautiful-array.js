/**
 * @param {number} n
 * @return {number[]}
 */
var beautifulArray = function(n) {
    
    function build(num){
        if(num === 1) return [1];

        let left = build(Math.ceil(num/2));
        let right = build(Math.floor(num/2));

        let result = [];

        for(let x of left){
            result.push(2*x-1);
        }

        for(let x of right){
            result.push(2*x)
        }

        return result
    }


    return build(n)
};