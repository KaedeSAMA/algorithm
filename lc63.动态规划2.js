/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const dp = []

    let x = true
    let y = true
    obstacleGrid.forEach((item)=>{
        if(item[0] === 1){
            y = false
        }
        if(y){
            dp.push([1])
        }else{
            dp.push([0])
        }
    })


    for(let i = 0; i < obstacleGrid[0].length; i ++){
        if(obstacleGrid[0][i] === 1){
            x = false
        }
        if(x){
            dp[0][i] = 1
        }else{
            dp[0][i] = 0
        }
    }
    // console.log('边初始化矩阵',dp);

    for(let i = 0; i < obstacleGrid.length; i ++){
        for(let j = 0; j < obstacleGrid[0].length; j ++){
            if(obstacleGrid[i][j] === 1){
                dp[i][j] = 0
            }
        }
    }

    // console.log('初始化矩阵',dp);

    for(let i = 1; i < obstacleGrid.length; i ++){
        for(let j = 1; j < obstacleGrid[0].length; j ++){
            if(dp[i][j] !== 0)
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }

    // console.log(dp);
    return dp[obstacleGrid.length - 1][obstacleGrid[0].length - 1]
};


uniquePathsWithObstacles(
    [
        [0,1,0],
        [1,1,0],
        [0,0,0]
    ]


)