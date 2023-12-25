/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @return {void} Do not return anything, modify C in-place instead.
 */
function move(A,B,C,n){
    if(n === 1){
       C.push(A.pop())
       return
    }
    move(A,C,B,n-1)
    C.push(A.pop())
    move(B,A,C,n-1)
}


var hanota = function(A, B, C) {
    move(A,B,C,A.length)
};