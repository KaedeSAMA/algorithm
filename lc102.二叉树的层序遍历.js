/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root){
        return []
    }
    const queue = []
    const resArr = []
    let childArr = []
    queue.push(root)
    let queueSize = 1
    let shiftCnt = 0

    while (queue.length !== 0){
        
        let nowNode = queue.shift()
        childArr.push(nowNode.val)
        shiftCnt ++;

        if(nowNode.left){
            queue.push(nowNode.left)
        }
        if(nowNode.right){
            queue.push(nowNode.right)
        }

        if(shiftCnt === queueSize){
            queueSize = queue.length
            shiftCnt = 0
            resArr.push(childArr)
            childArr = []
        }
    }
    return resArr
};




const binaryTree = {
    val:1,
    left:{
        val:2,
        left:{
            val:3,
            left:null,
            right:null,
        },
        right:{
            val:4,
            left:null,
            right:null
        }
    },
    right:{
        val:5,
        left:{
            val:6,
            left:null,
            right:null,
        },
        right:{
            val:7,
            left:null,
            right:null,
        }
    }
}

console.log(levelOrder(binaryTree));