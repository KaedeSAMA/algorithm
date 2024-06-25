/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 1) {
        return 1
    }
    let fast = 1,
        slow = 0,
        lastTime = nums[0],
        duplicateCount = 1,
        count = 1

    while(fast < nums.length) {
        const thisTime = nums[fast]
        console.log(thisTime)
        if (lastTime === thisTime) {
            if (duplicateCount < 2) {
                slow ++
                nums[slow] = thisTime
                count ++
            }
            duplicateCount ++
        } else {
            duplicateCount = 1
            slow ++
            nums[slow] = thisTime
            count ++
        }
        lastTime = nums[fast]
        fast ++

    }
    return count
};

const nums = [1,1,1,1,2,2,3,4,5,6,6]
console.log("count = ", removeDuplicates(nums))
console.log(nums);