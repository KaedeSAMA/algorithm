/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const arr = Array.from({ length: nums.length })
    let left = 0, right = nums.length - 1, resPoint = arr.length;
    while(left < right){
        if(Math.abs(nums[left]) > Math.abs(nums[right])){
            arr[resPoint] = nums[left]*nums[left]
            resPoint --
            left ++
        }else{
            arr[resPoint] = nums[right] * nums[right]
            resPoint --
            right --
        }
    }
    return arr
};