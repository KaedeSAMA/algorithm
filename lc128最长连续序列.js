/**
 * @param {number[]} nums
 * @return {number}
*/
// 我的解法
// class HashMap {
//     constructor (hashNum){
//         this.hashNum = hashNum
//     }
//     hashNum = 100;
//     data  = {};
//     set(val){
//         let key = val % this.hashNum
//         if(Object.keys(this.data).includes(String(key))){
//             this.data[key].push(val)
//         }else{
//             this.data[key] = [val]
//         }
//     }
//     get(val){
//         let key = val % this.hashNum
//         if(Object.keys(this.data).includes(String(key))){
//             if(this.data[key].includes(val)){
//                 return true
//             }else{
//                 return false
//             }
//         }else{
//             return false
//         }
//     }
// }




// var longestConsecutive = function(nums) {
//     const hasher = new HashMap(10);
//     let max=0,nowMax = 0;
//     nums = Array.from(new Set(nums))
    
//     nums.map(item=>{
//         hasher.set(item)
//     })
//     for(let i = 0 ;i <nums.length;i++){
//         nowMax = 0;
//         if(hasher.get(nums[i]-1)){
//             continue
//         }else{
//             nowMax = 1
//             while(hasher.get(nums[i]+1)){
//                 nowMax ++
//                 nums[i]= nums[i]+1
//             }
//         }
//         if(nowMax > max){
//             max = nowMax
//         }
//     }
//     return max
// };



// 看完题解后的解法

var longestConsecutive = function(nums) {
    const set = new Set(nums)
    let max=0,nowMax = 0;
    for(let i = 0 ;i <nums.length;i++){
        nowMax = 0;
        if(set.has(nums[i]-1)){
            continue
        }else{
            nowMax = 1
            while(set.has(nums[i]+1)){
                nowMax ++
                nums[i]= nums[i]+1
            }
        }
        if(nowMax > max){
            max = nowMax
        }
    }
    return max
};