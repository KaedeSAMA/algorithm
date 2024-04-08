function quickSort (arr, argleft = 0, argright = arr.length - 1){
    console.log(`now:${argleft}---${argright}\n---------------\n arr:${arr}`);
    if(argright - argleft <= 0){
        return
    }
    let left = argleft
    let right = argright
    const standatd = arr[argleft]
    let p = "RIGHT"
    while(left !== right){
        console.log(`standard:${standatd}\nleft:arr[${left}] = ${arr[left]}\nright:arr[${right}] = ${arr[right]}\np = ${p}\n`);

        if(p === "RIGHT"){
            if(arr[right] <= standatd){
                [arr[left],arr[right]] = [arr[right],arr[left]]
                p = "LEFT"
                continue
            }else{
                right --
            }
        }

        if(p === "LEFT"){
            if(arr[left] > standatd){
                [arr[left],arr[right]] = [arr[right],arr[left]]
                p = "RIGHT"
                continue
            }else{
                left ++
            }
        }
    }

    quickSort(arr,argleft,left -1)
    quickSort(arr,left + 1,argright)
}

const arr = [5,1,1,2,0,0]
quickSort(arr)

console.log(arr);