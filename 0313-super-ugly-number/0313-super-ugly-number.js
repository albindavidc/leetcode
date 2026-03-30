/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {

    let dp = new Array(n).fill(0);
    dp[0] = 1;

    let pointer = new Array(primes.length).fill(0);

    for (let i = 1; i < n; i++) {

        let minVal = Infinity

        for (let j = 0; j < primes.length; j++) {
            let temp = dp[pointer[j]] * primes[j];

            minVal = Math.min(minVal, temp);
        }


        dp[i] = minVal;

        for (let j = 0; j < primes.length; j++) {
            if (dp[pointer[j]] * primes[j] === minVal) {
                pointer[j]++
            }
        }
    }

    return dp[n - 1]
};