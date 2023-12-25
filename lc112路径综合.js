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
 * @param {number} targetSum
 * @return {boolean}
 */
function check(node){
    if(node.left === null && node.right === null){
        return [node.val]
    }
    let l = [],r = []
    if(node.left !== null){
        l = check(node.left)
    }
    if(node.right !== null){
        r = check(node.right)
    }
    return l.concat(r).map(i=>i+node.val)
}


var hasPathSum = function(root, targetSum) {
    if(!root) return false
    const arr = check(root);
    console.log("ARR",arr);
    return arr.includes(targetSum)
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

console.log(
    hasPathSum(tree,10)
);