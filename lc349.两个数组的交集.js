/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const map = new Map()
    const set = new Set()
    for(let i of nums1){
        map.has(i) ? map.set(i,1) : map.set(i, map.get(i) + 1)
    }

    for(let i of nums2){
        map.has(i) ? set.add(i) : null
    }

    return Array.from(set)
};