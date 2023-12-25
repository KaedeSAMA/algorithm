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
 * @return {number[]}
 */



var preorderTraversal = function(root) {
    function pre(node){
        if(node.left === null && node.right === null){
            return
        }
        arr.push(node.val)
        pre(node.left)
        pre(node.right)
    }
    const arr = []
    
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