/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function(target) {
    
    target = Math.abs(target);

    let left = 0;
    let right = 2 * Math.sqrt(target);

    while(left < right){
        let mid = Math.floor((left + right)/2);

        let sum = mid * (mid + 1)/2;

        if(sum >= target){
            right = mid
        }else{
            left = mid + 1;
        }
    }

    let n = left;
    let sum = n * (n+1) /2;

    while((sum - target) % 2 !== 0){
        n++;
        sum += n;
    }

    return n
};