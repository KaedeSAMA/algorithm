function merge(arr){
    if(arr.length === 1){
        return arr
    }
    let length = arr.length
    let mid = arr.length >> 1

    let lArr = merge(arr.slice(0,mid))
    let rArr = merge(arr.slice(mid,length))
    console.log("L",lArr,"R",rArr);
    
    let lp = 0;
    let rp = 0;

    const resArr = []
    while(lp <= lArr.length && rp <= rArr.length){
        if(lArr[lp] <= rArr[rp]){
            resArr.push(lArr[lp])
            lp ++
        }else{
            resArr.push(rArr[rp])
            rp ++
        }
    }
    return resArr
}

function sort (arr){
    console.log(merge(arr));
}

sort([3,2,1])