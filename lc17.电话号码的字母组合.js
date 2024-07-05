const phoneMap = new Map()
phoneMap.set(2, ['a', 'b', 'c'])
phoneMap.set(3, ['d', 'e', 'f'])
phoneMap.set(4, ['g', 'h', 'i'])
phoneMap.set(5, ['j', 'k', 'l'])
phoneMap.set(6, ['m', 'n', 'o'])
phoneMap.set(7, ['p', 'q', 'r', 's'])
phoneMap.set(8, ['t', 'u', 'v'])
phoneMap.set(9, ['w', 'x', 'y', 'z'])

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits === "") {
        return []
    }
    result = []
    const phoneNumArr = digits.split('')
    deep(phoneNumArr.length, "", 0, phoneNumArr)
    return result
};

/**
 * @param {number} final
 * @param {string} path
 * @param {number} phoneIndex
 * @param phoneNumArr
 */
function deep(final, path, phoneIndex, phoneNumArr ) {
    if (path.length === final) {
        result.push(path)
        return
    }

    let phoneCharacters = phoneMap.get(Number(phoneNumArr[phoneIndex]))
    // console.log(`phoneNumArr = ${phoneNumArr}, phoneIndex = ${phoneIndex} ${phoneNumArr[phoneIndex]} phoneChars = ${phoneCharacters}`)
    if (phoneCharacters) {
        for (let i = 0; i < phoneCharacters.length; i ++) {
            path += phoneCharacters[i]
            console.log(path)
            deep(final, path, phoneIndex + 1, phoneNumArr)
            let tempArr = path.split("")
            tempArr.pop()
            path = tempArr.join("")
        }
    }
}

letterCombinations('23')
