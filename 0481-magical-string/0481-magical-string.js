/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function(n) {
    if(n < 1) return 0;
    if(n < 3) return 1;

    let magic = [1,2,2]
    let head = 2;
    let num = 1
    let result = 1;

    while(magic.length < n){
        let times = magic[head];

        for(let i = 0; i<times; i++){
            magic.push(num);

            if(num === 1 && magic.length <= n){
                result++
            }
        }

        num = num === 1 ? 2 : 1;
        head++
    }

    return result
};