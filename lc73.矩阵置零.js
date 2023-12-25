/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    // 记录0的行和列
    let col = [];
    let row = [];

    matrix.forEach((col_item,col_index)=>{
        col_item.forEach((item,row_index)=>{
            if(item === 0){
                col.push(col_index);
                row.push(row_index);
            }
        })
    })

    col.forEach(i=>{
        matrix[i] = Array.from({length:matrix[0].length}).fill(0)
    })

    row.forEach(i=>{
        matrix.forEach(row_item=>{
            row_item[i] = 0
        })
    })

    console.log(row,col);
};

let mat = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
setZeroes(mat);

console.log(mat);

