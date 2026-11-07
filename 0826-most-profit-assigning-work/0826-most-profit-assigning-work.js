/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {


    let job = difficulty.map((d, i) => [d, profit[i]])

    job = job.sort((a, b) => a[0] - b[0])
    worker = worker.sort((a, b) => a - b)

    let dIdx = 0
    let wIdx = 0

    let result = 0;
    let maxP = 0;

    for (let i = 0; i < worker.length; i++) {


        while (dIdx < job.length && job[dIdx][0] <= worker[i]) {
            maxP = Math.max(maxP, job[dIdx][1])
            dIdx++
        }

        result += maxP
    }


    return result
};