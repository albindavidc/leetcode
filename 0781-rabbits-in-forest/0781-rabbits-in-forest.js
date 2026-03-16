/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    
    let map = new Map();

    for(let i = 0; i<answers.length; i++){
        map.set(answers[i], (map.get(answers[i])|| 0) + 1);
    }

    let result = 0;


    for(let [x, count] of map){
        let grpsize = x + 1;
        let group = Math.ceil(count/grpsize);

        result += group * grpsize
    }

    return result
};