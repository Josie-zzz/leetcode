/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * 采用递归的方式：和最大深度一样，只是为0的不参与比较
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) {
        return 0
    }
    const min = minDepth(root.left)
    const max = minDepth(root.right)
    let deep = 0
    // 深度为0的不参与比较
    if(min && max) {
        deep = Math.min(min, max)
    } else {
        deep = Math.max(min, max)
    }
    return deep + 1
};

// 还有一种方法：采用层序遍历【广度优先算法】，用队列，也可以找到。。

// @lc code=end

