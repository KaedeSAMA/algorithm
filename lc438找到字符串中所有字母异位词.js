/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

// 自己的超时解法

// const isStr = (arr1,arr2)=>{
//     const mp = new Map()
//     let res = true
//     arr1.map(i=>{
//         if(mp.get(i) === undefined){
//             mp.set(i,1)
//         }else{
//             mp.set(i,mp.get(i)+1)
//         }
//     })
//     arr2.map(i=>{
//         if(mp.get(i) !== undefined && mp.get(i)>0){
//             mp.set(i,mp.get(i)-1)
//         }else{
//             mp.set(i,-1)
//         }
//     })

//     mp.forEach((val,key)=>{
//         if(val !== 0){
//             res = false
//         }
//     })
//     return res
// }



// var findAnagrams = function(s, p) {
//     let res_arr = []
//     if(p.length > s.length){
//         return res_arr
//     }
//     let s_arr = s.split('');
//     s_arr.map((item,idx)=>{
//         if(s_arr[idx+p.length-1] !== undefined){
//             let check_arr = []
//             for(let k = 0;k<p.length;k++){
//                 if(s_arr[idx+k]!==undefined){
//                     check_arr.push(s_arr[idx+k])
//                 }else{
//                     break
//                 }
//             }
//             console.log(check_arr);
//             if(isStr(check_arr,p.split(''))){
//                 res_arr.push(idx)
//             }
//         }
//     })
//     return res_arr
// };
// console.log(
// findAnagrams("abab",'ab')
    
// );


// 看完题解思路解法
var findAnagrams = function(s, p) {
    if(p.length > s.length){
        return []
    }

    const check_arr = Array.from({length:26}).fill(0)
    const s_check_arr = Array.from({length:26}).fill(0)

    p.split('').map((i,idx)=>{
        check_arr[i.charCodeAt(0) - 97] = check_arr[i.charCodeAt(0) - 97]+1
    })

    let ans = []
    let s_arr = s.split('')
    let left = 0
    let right = p.length - 1

    for(let i = 0;i<=right;i++){
        s_check_arr[s_arr[i].charCodeAt(0)-97] = s_check_arr[s_arr[i].charCodeAt(0)-97]+1
    }

    if (check_arr.toString()===s_check_arr.toString()){
        ans.push(0)
    }

    while(right < s_arr.length - 1){
        s_check_arr[s_arr[left].charCodeAt(0)-97] = s_check_arr[s_arr[left].charCodeAt(0)-97] - 1
        left ++ 
        right ++
        s_check_arr[s_arr[right].charCodeAt(0)-97] = s_check_arr[s_arr[right].charCodeAt(0)-97] + 1

        if (check_arr.toString()===s_check_arr.toString()){
            ans.push(left)
        }
    }
    return ans
};

console.log(findAnagrams("abab","ab"));