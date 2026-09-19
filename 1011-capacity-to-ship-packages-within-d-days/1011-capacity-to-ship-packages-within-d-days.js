/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
    let left = Math.max(...weights);
    let right = weights.reduce((curr, acc) => curr + acc, 0);

    while (left < right) {
        let capacity = Math.floor((left + right) / 2);

        let currDay = 1;
        let currWeight = 0;

        for (let weight of weights) {
            if (currWeight + weight > capacity) {
                currDay++;
                currWeight = 0
            }

            currWeight += weight
        }

        if (currDay <= days) {
            right = capacity;
        } else {
            left = capacity +1
        }
    }

    return left;
};