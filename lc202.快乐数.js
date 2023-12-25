/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const set = new Set();

    let now = String(n)
    while(1){
        // 本次循环的数
        let sum = 0;

        

        for(let num of now){
            console.log(num);
            sum += num*num
        }


        if((String(sum)[0] === 1 && sum % 10 === 0) || sum === 1){
            return true
        }

        if(set.has(sum)){
            return false
        }else{
            set.add(sum)
        }

        now = String(sum)
    }
};

console.log(
    isHappy(3)
);