/**
 * @param {number[]} height
 * @return {number}
 */
// 自己写的

// var trap = function(height) {
//     let upVal = 0;
//     let positionArr = []
//     height.map((item,idx)=>{
//         if(item>=upVal){
//             upVal = item
//             positionArr.push(idx)
//         }
//     })
//     upVal = 0
//     let positionRev = []
//     for(i = height.length-1 ;i>=0;i--){
//         if(height[i]>=upVal){
//             upVal = height[i]
//             positionRev.unshift(i)
//         }
//     }
//     positionArr = Array.from(new Set(positionArr.concat(positionRev)))
//     let totalSquare = 0;
//     console.log(positionArr);
//     positionArr.map((position,idx)=>{
//         console.log("now:",position,positionArr[idx+1]);
//         let minHeight = Math.min(height[position],height[positionArr[idx+1]])
//         let every = 0
//         for (i = position+1;i<positionArr[idx+1];i++){
//             every += (minHeight-height[i])
//         }
//         totalSquare += every
//         console.log(every);
//     })
//     return totalSquare
// };


// 看完题解后写的

var trap = function(height) {
    let l = 0,
        r = height.length-1
        l_max = 0;
        r_max = 0;
        tallest = {
            val:0,
            idx:0
        }
        totalWater = 0;
    height.map((i,idx)=>{
        if(i>tallest.val){
            tallest.val = i;
            tallest.idx = idx
        }
    })
    while(l<tallest.idx){
        l_max = Math.max(height[l],l_max)
        if(height[l]<l_max){
            totalWater += (l_max - height[l])
        }
        l++
    }
    while(r>tallest.idx){
        r_max = Math.max(height[r],r_max)
        if(height[r]<r_max){
            totalWater += (r_max - height[r])
        }
        r--
    }
    return totalWater
};



let height = [0,1,0,2,1,0,1,3,2,1,2,1]
trap(height)