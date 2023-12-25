/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


// 自己写的抽象滑动窗口，因为有负数所以过不去
// var subarraySum = function(nums, k) {
//     let left = 0;
//     let right = 0;
//     let sum = 0;

//     let ans = 0;

//     sum  = nums[0]
//     if(sum === k){
//         ans ++
//         right ++
//         sum += nums[right]
//     }

//     while(right <= nums.length - 1 && left <= nums.length - 1){
//         if(sum === k){
//             ans ++
//             sum -= nums[left]
//             left ++ 
//             continue
//         }
//         if (sum > k){
//             sum -= nums[left]
//             left ++
//             continue
//         }
//         if (sum < k){
//             right ++
//             sum += nums[right]
//             continue
//         }
//     }

//     return ans
// };


// console.log(subarraySum([-1,-1,1],0));

var subarraySum = function (nums, k) {
    const mp = new Map()

    let sum = 0;
    let cnt = 0;
    nums.forEach(item=>{
        sum += item;

        if(sum === k){
            cnt ++
        }

        if (mp.get(sum - k)){
            cnt += mp.get(sum-k)
        }

        if (mp.get(sum)){
            mp.set(sum,mp.get(sum)+1)
        }else{
            mp.set(sum,1)
        }

    })
  
    return cnt;
  };