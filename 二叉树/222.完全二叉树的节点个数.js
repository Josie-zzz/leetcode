/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
 * 当前节点数就等于左 + 右 + 1，所以递归遍历就能得到这个值，最大深度那些个题的变种了
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    const findNode = (node) => {
        if(node === null) {
            return 0
        }
        const left = findNode(node.left)
        const right = findNode(node.right)
        return left + right + 1
    }
    return findNode(root)
};

// 简单点写法
countNodes = function(root) {
    if(root === null) {
        return 0
    }
    return countNodes(root.left) + countNodes(root.right) + 1
};
// @lc code=end
const { TreeNode } = require('../数据结构/4.树/树')

const tree = new TreeNode().createTree([1,2,3,4,5,6])
const tree2 = new TreeNode().createTree([])
const tree3 = new TreeNode().createTree([1])
console.log(countNodes(tree))
console.log(countNodes(tree2))
console.log(countNodes(tree3))