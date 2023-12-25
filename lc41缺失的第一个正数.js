/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    nums.forEach(item=>{
        nums[Number(item)-1] ? nums[Number(item)-1] = nums[Number(item)-1].toString():null;
    })

    for (let i = 0 ; i<nums.length ; i++){
        if(typeof nums[i] !== "string"){
            return i+1
        }
    }
    return nums.length + 1
};