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
var swapPairs = function(head) {
    if(!head){
        return head
    }
    let dummyHead = {
        next : head
    }
    let curr = dummyHead

    while(curr.next !== null && curr.next.next !== null){
        temp = curr.next;
        curr.next = curr.next.next;
        temp2 = curr.next.next;
        curr.next.next = temp;
        curr.next.next.next = temp2;
        curr = curr.next.next
    }

    return dummyHead.next
};

let nodelist = {
    val:1,
    next:{
        val:2,
        next:{
            val:3,
            next:{
                val:4,
                next:{
                    val:5,
                    next:null
                }
            }
        }
    }
}

swapPairs(nodelist)