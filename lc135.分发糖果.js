/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let sum = 0
    let nowCandy = 0
    let min = Infinity
    ratings.forEach((item, index)=>{
        if(index === 0){
            sum = 1
            nowCandy = 1
        }else{
            if(item >= ratings[index - 1]){
                nowCandy ++
                sum += nowCandy
            }else{
                nowCandy --
                sum += nowCandy
            }
            min = Math.min(min, nowCandy)
        }
    })

    if(min <= 0){
        sum += ratings.length*(1 - min)
    }

    return sum
};