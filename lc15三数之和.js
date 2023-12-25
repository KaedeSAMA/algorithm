/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = []
    nums.sort((a,b)=>a-b)

    for(let i = 0;i < nums.length; i ++){
        if(i > 0 && nums[i] === nums[i] - 1){
            continue
        }
        if(nums[i] > 0){
            return res
        }
        let left = i + 1, right = nums.length - 1

        while(left < right){
            if(nums[i] + nums[left] + nums[right] === 0){
                if(nums[left] !== nums[left - 1]){
                    res.push([nums[i],nums[left],nums[right]])
                    left ++ ;
                    right -- ;
                    continue
                }
            }
            if(nums[i] + nums[left] + nums[right] < 0){
                while(nums[left + 1] === nums[left]){
                    left ++
                }
            }
            if(nums[i] + nums[left] + nums[right] > 0){
                while(nums[right - 1] === nums[right]){
                    left ++
                }
            }
        }
    }
};
