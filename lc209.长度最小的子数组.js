/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    // 记录长度
    let cnt = 1,res = +Infinity
    //
    let left = 0, right = 0, sum = nums[0];

    while(left < nums.length && right < nums.length){
            if(sum < target){
                cnt ++
                right ++
                sum += nums[right]
                continue
            }
            if(sum >= target){
                res = Math.min(cnt,res)
                sum -= nums[left]
                left ++
                cnt --
                continue
            }
    }
    return res === +Infinity ? 0 : res
};
