/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let max_length = 0;
    let col_cnt = 0;
    const mapper = matrix.map((col_item,col_idx)=>{
        let col = Array.from({length:col_item.length}).fill(1)
        col_cnt = Math.max(col_cnt,col_idx+1)
        return col
    })

    max_length = col_cnt * matrix[0].length

    let x = 0;
    let y = 0;
    let direction = 'RIGHT'
    let ans = [];


    while(1){
        ans.push(matrix[y][x])

        if(ans.length === max_length){
            break
        }
        mapper[y][x] = 0

        // 右：x++ 下：y++ 左：x-- 上：y--
        switch (direction) {
            case "RIGHT":
                if( mapper[y][x+1] !== 1){
                    ans.pop()
                    direction = "DOWN"
                }else{
                    x++
                }
                break;
            case "DOWN":
                if(mapper[y+1]===undefined||mapper[y+1][x] !== 1){
                    ans.pop()
                    direction = "LEFT"
                }else{
                    y++
                }
                break;
            case "LEFT":
                if(mapper[y][x-1] !== 1){
                    ans.pop()
                    direction = "UP"
                }else{
                    x--
                }
                break;
            case "UP":
                if(mapper[y-1][x] !== 1){
                    ans.pop()
                    direction = "RIGHT"
                }else{
                    y--
                }
                break;
            default:
                break;
        }
    }
    return ans
};


spiralOrder([[1,2,3],[4,5,6],[7,8,9]]);