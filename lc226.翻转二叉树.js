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
 * @return {TreeNode}
 */
function reverse (node){
    if(node === null){
        return node
    }
    if(!node.left && !node.right){
        return node
    }


    let temp = node.right;
    node.right = reverse(node.left);
    node.left = reverse(temp);

    
    return node
}



var invertTree = function(root) {
    if(!root){
        return root
    }
    return reverse(root)
};