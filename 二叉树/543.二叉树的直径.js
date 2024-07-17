/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 这个题和我理解的直径完全不是一个意思。。他说的直径是指任意两个节点的最远距离，最开始没想出来怎么做，看了一眼题解的图瞬间明白了
 * 因为如果存在最远的两个节点的话，其实一定会经过相同的一个根节点，所以只需要得到左右子树节点之和最大的节点数就行了
 * 所以和最大深度的题几乎类似
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let maxLength = 0
    const traverseTree = (node) => {
        if(!node) {
            return 0
        }
        let left = traverseTree(node.left)
        let right = traverseTree(node.right)
        let len = left + right
        // 保存遍历过程中的经过的最大子节点
        maxLength = Math.max(len, maxLength)
        // 返回最大子节点数量，别忘了 + 1 ，也就是当前这一层的
        return Math.max(left, right) + 1
    }
    traverseTree(root)
    return maxLength
};
// @lc code=end
const { TreeNode } = require('../数据结构/4.树/树')
const root = new TreeNode()
const rootTree = root.createTree([1,2,3,4,5])
const rootTree2 = root.createTree([1,2])
console.log(diameterOfBinaryTree(rootTree))
console.log(diameterOfBinaryTree(rootTree2))