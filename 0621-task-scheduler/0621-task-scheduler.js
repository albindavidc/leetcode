/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    let count = new Map();

    for (let num of tasks) {
        count.set(num, (count.get(num) || 0) + 1)
    }

    let time = 0;

    while (count.size > 0) {

        let arr = [...count.entries()].sort((a, b) => b[1] - a[1])
        let temp = [];
        let cycle = n + 1

        for (let i = 0; i < arr.length && cycle > 0; i++) {
            let [key, freq] = arr[i]
            count.delete(key)

            if (freq - 1 > 0) {
                temp.push([key, freq - 1]);
            }
            cycle--
            time++
        }

        for (let [key, freq] of temp) {
            if (freq > 0) {
                count.set(key, freq)
            }
        }

        if(count.size > 0) time += cycle
    }

    return time
};