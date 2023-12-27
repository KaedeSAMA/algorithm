/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if(n === 2){
        return 1
    }
    if(n === 3){
        return 2
    }
    const dp = []

    dp[1] = 1
    dp[2] = 2
    dp[3] = 3

    for (i = 4; i <= n; i ++){
        let max = i
        for (j = 1; j <= i >> 1; j ++){
            // console.log(j,i-j);
            // console.log("DP:",dp[j],dp[(i - j)]);
            max = Math.max(max,dp[j]*dp[(i - j)])
        }
        dp[i] = max
        // console.log('========');
    }

    // console.log(dp[n]);
    return dp[n]
};

integerBreak(10)