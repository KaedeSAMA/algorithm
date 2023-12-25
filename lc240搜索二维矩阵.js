/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// var searchMatrix = function(matrix, target) {
//     let row = 0;
//     let col = matrix[0].length-1;
//     let res = false;
//     do{
//         console.log(row,col);
//         if(matrix[row][col] === target){
//             return res = true
//         }else{
//             matrix[row][col] > target ? col-- : row ++
//         }
//     }while(row <= matrix.length-1 && col>=0)
//     return res
// };


var searchMatrix = function(matrix, target,row,col) {
    if(row === undefined){
        row = 0
    }
    if(col === undefined){
        col = matrix[0].length - 1 
    }
    console.log(row,col);
    return matrix[row][col] === target? true : arr[row][col]>target? searchMatrix(arr,row,col-1):searchMatrix(arr,row+1,col)
};

const arr = [[-1,3]]
searchMatrix(arr,-1)