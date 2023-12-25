/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var bin = function (arr,target,l=0,r=arr.length -1){
    const mid = Math.floor((l+r)/2)
    if (arr[mid] === target){
        return true;
    }
    if (r-l <= 1){
        if(arr[l] === target){
            return true
        }
        if(arr[r] === target){
            return true
        }else{
            return false;
        }
    }
    if (arr[mid] > target){
        return bin(arr,target,l,mid)
    }
    if (arr[mid] < target){
        return bin(arr,target,mid,r)
    }
}

var searchMatrix = function(matrix, target) {
    const arr = matrix.flat();
    return bin(arr,target)
};

const arr = Array.from({length:10000},()=>0)
console.log(searchMatrix(arr,30));