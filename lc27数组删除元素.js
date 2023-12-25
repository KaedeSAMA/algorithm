/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let fast = 0, slow = 0
    let length = 0
    while(fast < nums.length - 1){
        if(nums[fast] !== val){
            console.log("fast:",nums[fast]);
            nums[slow] = nums[fast]
            length ++
            slow ++
        }
        fast ++
    }
    return length
};