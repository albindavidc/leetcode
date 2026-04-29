/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function (landStartTime, landDuration, waterStartTime, waterDuration) {

    let result = Infinity;

    for (let i = 0; i < landStartTime.length; i++) {
        for (let j = 0; j < waterStartTime.length; j++) {
            let landEnd = landStartTime[i] + landDuration[i];
            let waterStart = Math.max(landEnd, waterStartTime[j])
            let final1 = waterStart + waterDuration[j]

            let waterEnd = waterStartTime[j] + waterDuration[j];
            const landStart = Math.max(waterEnd, landStartTime[i]);
            let final2 = landStart + landDuration[i]

            result = Math.min(result, final1, final2)
        }
    }

    return result;
};