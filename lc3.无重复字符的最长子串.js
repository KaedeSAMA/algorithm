/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let mp = new Map()
    let res = 0
    let head = 0
    s.split('').map((item,index)=>{
        let lastPlace = mp.get(item)
        if(lastPlace === undefined){
            mp.set(item,index)
        }else{
            head = Math.max(lastPlace + 1,head)
            mp.set(item,index)
        }
        res = Math.max(index - head + 1,res)
    })
    return res
};

console.log(lengthOfLongestSubstring('wwqqee'));