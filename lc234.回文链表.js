/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let length = 0;
    let now = head;
    while(now !== null){
        length ++
        now = now.next
    }
    if(length === 1){
        return true
    }
    let mid = Math.ceil(length/2)
    let stack = [];
    let index = 1;
    now = head;
    while(now !== null){
        console.log("NOW",index,now.val);
        if(length%2 !==0 && index === mid){
            console.log("跳过",now.val);
            if(now.next !== null){
                now = now.next;
                index++
                continue
            }
        }
        console.log("INDEX,MID",index,mid);
        if(index <= mid){
            stack.push(now.val);
            now = now.next;
        }else{

            if(now.val === stack[stack.length-1]){
                stack.pop()
            }else{
                stack.push(now.val)
            }
            now = now.next;
        }
        index ++
        console.log(stack);
    }
    
    if(stack.length === 0){
        return true
    }else{
        return false
    }

    
};

// const head = {
//     val:1,
//     next:{
//         val:2,
//         next:{
//             val:5,
//             next:{
//                 val:2,
//                 next:{
//                     val:1,
//                     next:null
//                 }
//             }

//         }
//     }
// }



isPalindrome(head)