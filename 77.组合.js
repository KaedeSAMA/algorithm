/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    result = []
    deep([], 1, n, k)
    console.log(result)
    return result
};

function deep (arr, start, n, k) {
    if (arr.length === k) {
        result.push([...arr])
        return
    }

    for (let i = start; i <= n; i ++) {
        arr.push(i)
        deep(arr, i + 1, n, k)
        arr.pop()
    }
}

combine(5,4)
