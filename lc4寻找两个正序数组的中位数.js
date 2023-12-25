/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const getMid = (arr)=>{
    if(arr.length %2 === 0){
        return [arr[arr.length/2],length/2]
    }
    if(arr.length %2 !== 0){
        return [arr[Math.floor(arr.length/2)],Math.floor(arr.length/2)]
    }
}

var findMedianSortedArrays = function(nums1, nums2) {
    
};