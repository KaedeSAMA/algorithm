/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let map = new Map()
    let cnt = 0
    for(let num of nums1){
        for (let num2 of nums2){
            map.has(-(num+num2)) ? map.set(-(num+num2),map.get(-(num+num2))+1):map.set(-(num+num2),1)
        }
    }

    for(let num of nums3){
        for(let num4 of nums4){
            map.has(num+num4)? cnt+= map.get(num+num4) : null
        }
    }

    return cnt
};