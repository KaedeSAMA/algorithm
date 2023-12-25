/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===null ? 0 : val)
 *     this.left = (left===null ? null : left)
 *     this.right = (right===null ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function searchTree (root){
    if(root.left === null && root.right === null){
        return [String(root.val)]
    }
    let l = []
    let r = []
    if(root.left !== null){
        l = searchTree(root.left)
    }
    if(root.right !== null){
        r = searchTree(root.right)

    }
    return l.concat(r).map(item=>{
        return String(root.val) + String(item)
    })
}



var sumNumbers = function(root) {
    const arr = searchTree(root);
    let total = 0;
    arr.map(i=>{
        total += Number(i)
    })
    return total
};

const tree = {
    val:1,
    left:{
        val:2,
        left:{
            val:4,
            left:{
                val:8,
                left:null,
                right:null,
            },
            right:{
                val:9,
                left:null,
                right:null,
            }
        },
        right:{
            val:5,
            left:{
                val:9,
                left:null,
                right:null,
            },
            right:{
                val:1,
                left:null,
                right:null,
            }
        }

    },
    right:{
        val:3,
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
