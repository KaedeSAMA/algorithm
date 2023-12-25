/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map = new Map()
    for(let char of s){
        map.has(char) ? map.set(char,map.get(char)+1) : map.set(char,1)
    }

    for(let char of t){
        map.has(char) ? map.set(char,map.get(char)-1) : map.set(char,-1)
    }

    for(let [key,value] of map){
        if(value !== 0){
            return false
        }
    }

    return true
};



