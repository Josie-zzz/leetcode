/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

/**
 * 树的深度就是左右子树深度的最大值+1
 * 那么可以用递归，遍历到叶子节点，找到每一层的最大值，最终返回树的最大值
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if(!root) {
        return 0
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}
// @lc code=end
