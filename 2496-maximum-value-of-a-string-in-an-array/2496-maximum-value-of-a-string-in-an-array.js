/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    
    let max = 0;

    for(let i =0 ; i<strs.length; i++){
        let val = strs[i];

        let alpha = false;
        let num = false;

        for(let j = 0; j<val.length; j++){
            if(isNaN(strs[i][j])){
                alpha = true;
            }else{
                num = true;
            }
        }

        if(alpha || alpha && num){
          max =   Math.max(max, val.length)
        }else if(num){
            max = Math.max(max, Number(val))
        }
    }

    return max
};