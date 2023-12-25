/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let length = 0
    let curr = head
    while(curr){
        length ++
        curr = curr.next
    }

    curr = head
    let dummyHead = {
        next : head
    }
    let pre = dummyHead
    let index = length - n + 1
    console.log(index);
    for(let i = 1; i <= index; i ++){
        if(i === index){
            console.log("CURR>NEXT",curr,curr.next);
            pre.next = curr.next
            break
        }
        pre = curr
        curr = curr.next
    }

    return dummyHead.next
};