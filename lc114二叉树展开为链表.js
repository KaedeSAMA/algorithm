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
 * @return {void} Do not return anything, modify root in-place instead.
 */
const setNode = (aNode,bNode)=>{
    // 可以把bnode接在anode的anode.right上并返回
    if(aNode.right === null){
        console.log("拼接");
        aNode.right = bNode
        return
    }else{
        setNode(aNode.right,bNode)
    }
}


const changeChild=(root)=>{
    if(root.left === null && root.right === null){
        return root
    }
    if(root.left === null && root.right.left === null && root.right.right === null){
        return root
    }
    let l = null;
    if(root.left){
        l = changeChild(root.left)
    }
    let r = null;
    if(root.right){
        r = changeChild(root.right)
    }
    root.left = null;
    root.right = null;
    console.log("L:",l,"R",r);
    if(l === null){
        root.right = r;
        return root
    }else{
        setNode(l,r)
        root.right = l
    }
    return root
}



var flatten = function(root) {
    if(!root) return
    changeChild(root)
};

// const tree = {
//     val:1,
//     left:{
//         val:2,
//         left:{
//             val:4,
//             left:{
//                 val:8,
//                 left:null,
//                 right:null,
//             },
//             right:{
//                 val:9,
//                 left:null,
//                 right:null,
//             }
//         },
//         right:{
//             val:5,
//             left:{
//                 val:9,
//                 left:null,
//                 right:null,
//             },
//             right:{
//                 val:1,
//                 left:null,
//                 right:null,
//             }
//         }

//     },
//     right:{
//         val:3,
//         left:{
//             val:6,
//             left:null,
//             right:null,
//         },
//         right:{
//             val:7,
//             left:null,
//             right:null,
//         }
//     }
// }

const tree = {
    val:1,
    left:null,
    right:{
        val:2,
        left:{
            val:3,
            left:null,
            right:null
        },
        right:null,
    }
}


flatten(tree)

console.log(tree);