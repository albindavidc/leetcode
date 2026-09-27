/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    
    let result = [];

    let firstPtr = 0;
    let secondPtr = 0;

    while(firstPtr < firstList.length && secondPtr < secondList.length){
        let start = Math.max(firstList[firstPtr][0], secondList[secondPtr][0])
        let end = Math.min(firstList[firstPtr][1], secondList[secondPtr][1]);

        if(start <= end){
            result.push([start, end])
        }

        if(firstList[firstPtr][1] < secondList[secondPtr][1]){
            firstPtr++
        }else{
            secondPtr++
        }
    }

    return result
};