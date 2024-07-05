/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const sortedArr = intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < sortedArr.length; i++) {
        while (sortedArr[i + 1] && sortedArr[i][1] >= sortedArr[i + 1][0]) {
            if (sortedArr[i][1] < sortedArr[i + 1][1]) {
                sortedArr[i][1] = sortedArr[i + 1][1]
            }
            sortedArr.splice(i + 1, 1)
        }
    }
    return sortedArr
};

console.log(merge([[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]]))