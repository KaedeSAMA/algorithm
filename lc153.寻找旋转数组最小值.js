/**
 * @param {number[]} nums
 * @return {number}
 */
const find = (nums,left,right)=>{
    let mid = Math.ceil((left+right)/2)

    if(!nums[left]<nums[mid-1]){
        return find(nums,left,mid-1)
    }
    if(!nums[mid]<nums[right]){
        return find(nums,mid,right)
    }
}

var findMin = function(nums) {
    if(nums[0]<=nums[nums.length -1]){
        return nums[0]
    }
    return find(nums,0,nums.length-1)
};