/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // 取得两个链表的长度
    let lengthA = 0, lengthB = 0;
    let currA = headA
    let currB = headB
    while (currA !== null){
        lengthA ++;
        currA = currA.next
    }

    while (currB !== null){
        lengthB ++;
        currB = currB.next
    }

    let move;
    move = Math.abs(lengthA - lengthB)
    
    currA = headA;
    currB = headB;


    if(lengthA > lengthB){
        for(let i = 0; i < move; i++){
            currA = currA.next
        }
        currB = headB
    }

    if(lengthB > lengthA){
        for(let i = 0; i < move; i ++){
            currB = currB.next
        }
        currA = headA
    }

    while(currA !== null && currB !==null){
        if(currA === currB){
            return currA
        }
        currA = currA.next;
        currB = currB.next;
    }

    return null
};