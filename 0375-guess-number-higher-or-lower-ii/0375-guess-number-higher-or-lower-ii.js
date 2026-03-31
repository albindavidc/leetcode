/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function (n) {


    let dp = Array.from({ length: n+1 }, () => Array(n+1).fill(0));

    for (let len = 2; len <= n; len++) {
        for (let l = 1; l <= n-len+1; l++) {
            let r = (l + len) - 1;

            dp[l][r] = Infinity;

            for (let x = l; x <= r; x++) {
                let cost = x + Math.max(
                    x > l ? dp[l][x - 1] : 0,
                    x < r ? dp[x + 1][r] : 0
                );

                dp[l][r] = Math.min(dp[l][r], cost);
            }
        }
    }


    return dp[1][n]
};