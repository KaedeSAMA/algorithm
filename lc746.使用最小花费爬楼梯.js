/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    // dp i为离开该台阶一共要花费的最小值（含之前）
    const dp = []
    dp[0] = cost[0];
    dp[1] = cost[1];

    for (i = 2; i <= cost.length -1; i ++){
        dp[i] = Math.min(dp[i-1], dp[i-2]) + cost[i]
    }

    console.log(dp);
    return Math.min(dp[cost.length - 1], dp[cost.length - 2])
};


minCostClimbingStairs([10,1,12])