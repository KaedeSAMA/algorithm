/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
let result = []
var combinationSum3 = function(k, n) {
    deep([], 1, n, k)
    return result
};

function deep(path, start, target, k) {
    if (path.length === k) {
        let sum = 0
        path.forEach(item => {
            sum += item
        })
        if (sum === target) {
            console.log(path, sum, target)
            result.push([...path])
            console.log(result)
        }
        return
    }

    for (let i = start; i <= 9; i ++) {
        path.push(i)
        deep(path, i + 1, target, k)
        path.pop()
    }
}

combinationSum3(3, 9)
