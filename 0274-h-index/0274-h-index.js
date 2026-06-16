/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {

    let count = 0;
    for (let i = 1; i <= citations.length; i++) {
        let innCount = 0;

        for (let j = 0; j < citations.length; j++) {
            if (citations[j] >= i){
                innCount++;
            }
        }

        if(innCount >= i){
            count =  i
        }
    }

    return count
};