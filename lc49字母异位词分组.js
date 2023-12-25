/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// 我的第一次解法

// const equal = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false; // 数组长度不相等，内容一定不完全一致
//   }

//   // 对数组进行排序
//   const sortedArr1 = arr1.slice().sort();
//   const sortedArr2 = arr2.slice().sort();

//   return sortedArr1.every((element, index) => {
//     return element === sortedArr2[index]; // 比较对应位置的元素是否相等
//   });
// };

// var groupAnagrams = function (strs) {
//   let list = [];
//   strs.map((item) => {
//     let pd = {
//       tuple: item.split(""),
//       val: [item],
//     };
//     let flag = false;
//     list.map((i, idx) => {
//       if (equal(i.tuple, pd.tuple)) {
//         flag = {
//           idx,
//         };
//       }
//     });
//     if (flag) {
//       list[flag.idx].val = list[flag.idx].val.concat(pd.val);
//     } else {
//       list.push(pd);
//     }
//   });
//   return list.map((item) => item.val);
// };

// 正解
var groupAnagrams = function (strs) {
  const mp = new Map();
  strs.map((i) => {
    let key = i.split("").sort().join();
    if (mp.get(key)) {
      let list = mp.get(key);
      list.push(i);
    } else {
      mp.set(key, [i]);
    }
  });
  return Array.from(mp.values());
};

const arr = ["abc", "cba", "bca", "123", "sad"];
console.log(groupAnagrams(arr));
