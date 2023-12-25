/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 我的做法

// var moveZeroes = function(nums) {
//     // 保存住原数字顺序
//     const originNums = nums.filter(i=>i!==0)

//     let l = nums.length
//     let rp = l-1
//     let lp = l-1
//     while(lp >= 0){
//         if(nums[lp] === 0){
//             nums[lp] = nums[rp]
//             nums[rp] = 0
//             rp --
//         }
//         lp--
//     }
//     lp = 0
//     while(lp < l && nums[lp] !== 0){
//         nums[lp]=originNums[lp]
//         lp ++
//     }
// };


// 看完题解的做法
var moveZeroes = function(nums) {
    let slow = 0
    for(let fast = 0;fast<nums.length;fast++){
        if(nums[fast]){
            [nums[slow],nums[fast]] = [nums[fast],nums[slow]]
            slow++
        }
    }
};
