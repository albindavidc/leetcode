/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    if(hand.length % groupSize !== 0) return false;

    hand.sort((a,b) => a-b);

    let result = new Map();

    for(let card of hand){
        result.set(card, (result.get(card) || 0 ) + 1);
    }

    for(let card of hand){
        if(result.get(card) === 0) continue;

        for(let i = 0; i<groupSize; i++){
            let next = card + i;

            if(!result.get(next)) return false;

            result.set(next, result.get(next)-1);
        }
    }

    return true;
};