function foo(obj1,obj2){
    if(!(obj1 instanceof Object) && !(obj2 instanceof Object)){
        if (obj1 === obj2){
            return true
        }else{
            return false
        }
    }

    if(obj1 instanceof Array && obj2 instanceof Array){
        if(obj1.length !== obj2.length){
            return false
        }else{
            // debug
            for(i = 0; i < obj1.length; i++){
                if(!foo(obj1[i],obj2[i])){
                    return false
                }
            }
            return true
        }
    }

    if(obj1 instanceof Object && obj2 instanceof Object){
        const key1 = Object.keys(obj1)
        const key2 = Object.keys(obj2)

        if(foo(key1,key2)){
            let flag = true
            key1.forEach(key => {
                if(!foo(obj1[key],obj2[key])){
                    flag = false
                }
            });
            return flag
        }else{
            return false
        }
    }
}

const obj1 = {
    a : 1,
    b : [1,3,4]
}
const obj2 = {
    a : 1,
    b : [1,3,4]
}

console.log(foo(obj1,obj2));