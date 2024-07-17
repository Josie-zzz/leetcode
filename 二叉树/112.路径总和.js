/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * 其实就是二叉树的遍历，不要被路径误导了。。。
 * 每次遍历到当前节点时，只需要判断是否是叶子节点，然后之和是否等于目标值就行了，最开始写了非递归版本给绕进去了。
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let flag = false
    const findNode = (node, count = 0) => {
        if(node === null) {
            return
        }
        const current = count + node.val
        if(!node.left && !node.right && targetSum === current) {
            flag = true  
        }
        findNode(node.left, current)
        findNode(node.right, current)
    }
    findNode(root)
    return flag
};
// @lc code=end

/**
 * 递归 -- 优化版
 * 看了题解实现的比我更好一点
 */
hasPathSum = function(root, targetSum) {
    // 如果当前节点是null，则直接就是返回false
    if(root === null) {
        return false
    }

    // 判断是否是叶子节点，如果是的话就判断当前节点值是否和目标值一致，如果一致说明此路径可行
    if(!root.left && !root.right) {
        return targetSum === root.val
    }

    // 遍历左右，将目标值减去当前节点的值，继续查找
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
}

const { TreeNode } = require('../数据结构/4.树/树')

const tree = new TreeNode().createTree([5,4,8,11,null,13,4,7,2,null,null,null,1])
console.log(hasPathSum(tree, 22))