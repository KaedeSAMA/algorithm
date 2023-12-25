/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const map = new Map()
    for (let char of magazine){
        map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char,1)
    }

    for (let char of ransomNote){
        if(map.has(char)){
            map.set(char,map.get(char) - 1)
        }else{
            return false
        }
    }

    for (let [key,val] of map){
        if(val < 0) {
            return false
        }
    }

    return true
};