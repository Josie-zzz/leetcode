/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * 解题思路：先序遍历就是：中左右。因为遍历是一个重复的工作，所以肯定会用递归，所以就找就完事了。
 * @param {TreeNode} root
 * @return {number[]}
 */

var preorderTraversal = function(root) {
    const arr = []
    const findNode = (node) => {
        if(!node) {
            return
        }
        const val = node.val
        arr.push(val)
        if(node.left){
            findNode(node.left)
        }
        if(node.right){
            findNode(node.right)
        }
    }
    findNode(root)
    return arr
};
// @lc code=end

