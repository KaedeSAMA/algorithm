/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const bio = (nums, left, right, target) => {
    let mid = Math.ceil((left + right) / 2)
    if (nums[mid] === target) {
        return mid
    }
    if (left >= right) {
        return -1
    }

    if (nums[mid] < target) {
        return bio(nums, mid, right, target)
    }
    if (nums[mid] > target) {
        return bio(nums, left, mid - 1, target)
    }
}

const finalSearch = (nums, target, left, right) => {
    let mid = Math.ceil((left + right) / 2);

    // console.log("左侧区间：", nums.slice(left, (mid - 1) + 1));
    // console.log("右侧区间：", nums.slice(mid, right + 1));
    // console.log("LEFT", left, "RIGHT", right, "MID", mid);


    if (right - left <= 1) {
        if (nums[right] === target) {
            return right
        }
        if (nums[left] === target) {
            return left
        }
        return -1
    }
    // 如果左侧是增
    if (nums[left] <= nums[mid - 1]) {
        // 如果tar在增区间内,进行搜索
        if (target >= nums[left] && target <= nums[mid - 1]) {
            return bio(nums, left, mid - 1, target)
            // 否则递归调用
        } else {
            return finalSearch(nums, target, mid, right)
        }
    }
    // 如果右侧是增 
    if (nums[mid] <= nums[right]) {
        // console.log("右侧是增");
        // 如果tar在增区间内,进行搜索
        if (target >= nums[mid] && target <= nums[right]) {
            return bio(nums, mid, right, target)
            // 否则递归调用
        } else {
            return finalSearch(nums, target, left, mid - 1)
        }
    }
    if (nums[mid] === target) {
        return mid
    }
    if (left >= right) {
        return -1
    }
}


var search = function (nums, target) {
    return finalSearch(nums, target, 0, nums.length - 1)
};