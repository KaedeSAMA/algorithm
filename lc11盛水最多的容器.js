/**
 * @param {number[]} height
 * @return {number}
 */

// 我的解法（超时了）

// var maxArea = function(height) {
//     const maxSquare = []
//     height = height.map((i,index)=>{
//         return {
//             height:i,
//             position:index+1
//         }
//     })

//     height.sort((a,b)=>a.height - b.height)

//     height.map((item,index)=>{
//         let maxX = 0
//         let nowX = 0
//         for (let i = index;i<height.length;i++){
//             nowX = Math.abs(height[i].position - item.position)
//             maxX = Math.max(maxX,nowX)
//         }
//         maxSquare.push(item.height*maxX)
//     })
//     return Math.max(...maxSquare)
// };

// 知道思路之后

var maxArea = function (height) {
    let left = 0,
        right = height.length - 1;
    (rTall = height[right]), (lTall = height[left]);
    result = Math.min(rTall, lTall) * (right - left);;
    while (right > left) {
        console.log(lTall, rTall)
        if (rTall > lTall) {
            left++
            lTall = height[left]
            // 求新面积
            let s = Math.min(rTall, lTall) * (right - left);
            result = Math.max(s,result)
        } else {
            right--;
            rTall = height[right];
            // 求新面积
            let s = Math.min(rTall, lTall) * (right - left);
            result = Math.max(s,result)
        }
    }
    return result;
};

let arr = [1, 2,1];
console.log(maxArea(arr));
