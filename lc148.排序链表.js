/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


// 自己写的
// var sortList = function(head) {
//     let arr = [];
//     let now = head;

//     while(now!==null){
//         arr.push(now.val)
//         now = now.next
//     }

//     arr = arr.sort((a,b)=>b-a)

//     let node = null;
//     arr.forEach(val=>{
//         node = {
//             val,
//             next:node
//         }
//     })

//     return node
// };

// 看完题解后写的
function sort(nodeL,nodeR){
    
    nodeL = sort(,)
    nodeR = sort(,)
    let node = null
    let lp = nodeL,rp=nodeR
    while(lp !== null && rp !== null){
        if(lp.val < rp.val){
            node = {
                val:lp.val,
                next:node
            }
            lp = lp.next
        }else{
            node = {
                val:rp.val,
                next:node
            }
            rp = rp.next
        }
    }
    return node
}


var sortList = function(head) {

};

const node = {
    val:12,
    next:{
        val:19,
        next:{
            val:1,
            next:null
        }
    }
}

sortList(node)