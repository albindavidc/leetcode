/**
 * @param {number} n
 * @return {number}
 */
var minimumFlips = function(n) {
    
    let bina = n.toString(2);
    let rev = bina.split('').reverse().join('');
    let count = 0;

    for(let i = 0; i<bina.length; i++){
        if(bina[i] !== rev[i]){
            count++
        }
    }

    return count
};