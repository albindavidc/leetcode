/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
    function selectionSort(arr) {
        for (let i = 0; i < arr.length; i++) {
            let selected = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[selected] > arr[j]) {
                    selected = j;
                }
            }

            if (i !== selected) {
                [arr[i], arr[selected]] = [arr[selected], arr[i]]
            }
        }

        return arr
    }

    let timings = [];

    for (let i = 0; i < timePoints.length; i++) {
        let [hours, minutes] = timePoints[i].split(':').map(Number);

        timings.push(hours * 60 + minutes)
    }

    timings = selectionSort(timings)

    let result = Infinity;

    for (let i = 1; i < timePoints.length; i++) {
        let diff = timings[i] - timings[i - 1]
        if (diff < result) {
            result = diff
        }
    }

    let circular = 1440 - timings[timings.length - 1] + timings[0]
    if (circular < result) {
        result = circular
    }

    return result;
};