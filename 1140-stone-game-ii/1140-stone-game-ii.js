/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function (piles) {
    let n = piles.length;
    let result = Array(n+1).fill(0);

    for (let i = n-1; i >= 0; i--) {
        result[i] = piles[i] + result[i+1]
    }

    let dp = Array.from({length: n}, () => Array(n+1).fill(0));

    for(let i = n-1; i>=0; i--){
        for(let M = 1; M <= n; M++){
            if(i+ 2*M >= n){
                dp[i][M] = result[i];
                continue;
            }

            let best = 0;
            for(let X = 1; X <= 2*M; X++){
                let newM = Math.max(X, M);
                let opponent = dp[i+X][newM];
                let curr = result[i] - opponent;
                
                best = Math.max(best, curr);
            }

            dp[i][M] = best;
        }
    }

    return dp[0][1]
};