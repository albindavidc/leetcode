/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let hold = -Infinity;
    let sold = 0;
    let rest = 0;

    for(let price of prices){
        let preHold = hold;
        let preSold = sold;
        let preRest = rest;

        hold = Math.max(preHold, preRest - price);
        sold = preHold + price;
        rest = Math.max(preSold, preRest);
    }

    return Math.max(sold, rest)
};