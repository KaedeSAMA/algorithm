/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    const set = new Set()
    let curr = head
    while(curr){
        if(set.has(curr)){
            return curr
        }
        set.add(curr)
        curr = curr.next
    }
    return null
};