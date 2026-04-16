/**
 * @param {number[]} forts
 * @return {number}
 */
var captureForts = function (forts) {

    let result = 0;

    let count = 0;
    let last = -1;


   for(let i = 0; i<forts.length; i++){
    if(forts[i] === 0){
        count++;
    }else{
        if(last !== -1 && forts[i] !== last){
            result = Math.max(result, count);
        }

        count = 0
        last = forts[i]
    }
   }

    return result
};