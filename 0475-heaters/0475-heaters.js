/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
    heaters = heaters.sort((a, b) => a - b);
    houses = houses.sort((a, b) => a - b);

    let maxRadius = 0;

    for (let house of houses) {
        let left = 0;
        let right = heaters.length;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2)

            if (heaters[mid] < house) {
                left = mid +1
            } else {
                right = mid -1
            }


        }
        let dis1 = left < heaters.length ? Math.abs(heaters[left] - house) : Infinity;
        let dis2 = right >= 0 ? Math.abs(heaters[right] - house) : Infinity

        let minDis = Math.min(dis1, dis2);
        maxRadius = Math.max(maxRadius, minDis)
    }

    return maxRadius
};