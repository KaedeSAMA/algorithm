/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const compute = (aNode, bNode, isOver) => {
  // 函数用途：取到上次的进位，计算两个数的和，将形成的链表链接返回给上级
  if (aNode === null && bNode !== null) {
    aNode = {
      val: 0,
      next: null,
    };
  }
  if (aNode !== null && bNode === null) {
    bNode = {
      val: 0,
      next: null,
    };
  }
  if (aNode === null && bNode === null) {
    if (isOver === 1) {
      return {
        val: 1,
        next: null,
      };
    }
    return null;
  }

  let newNode = {};
  //   console.log("NEW NODE", newNode);
  let sum = aNode.val + bNode.val + isOver;
  if (sum >= 10) {
    newNode = {
      val: sum - 10,
      next: compute(aNode.next, bNode.next, 1),
    };
  } else {
    newNode = {
      val: sum,
      next: compute(aNode.next, bNode.next, 0),
    };
  }
  return newNode;
};

var addTwoNumbers = function (l1, l2) {
  let newNode = {};
  newNode = compute(l1, l2, 0);
  return newNode;
};

const l1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null,
    },
  },
};
const l2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null,
    },
  },
};

console.log(addTwoNumbers(l1, l2));
