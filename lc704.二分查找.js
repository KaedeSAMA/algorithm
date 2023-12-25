/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function bio (left,right,nums,tar){
    let mid = (left + right) >> 1
    if(left > right){
        return -1
    }
    if(nums[mid] === tar){
        return mid
    }
    if(nums[mid] < tar){
        return bio(mid+1, right, nums, tar)
    }
    if(nums[mid] > tar){
        return bio(left, mid - 1, nums, tar)
    }
}


var search = function(nums, target) {
    return bio(0,nums.length-1,nums,target)
};

