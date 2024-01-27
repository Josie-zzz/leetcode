/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * 设置两个指针，分别指向根节点的左右，遍历两边的树，如果存在不相等直接返回不相等，否则就继续
 * 直到树遍历完了，就返回对称
 * 层序遍历 -- 注意
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let rootLeft = root.left
    let rootRight = root.right
    const queueLeft = [rootLeft]
    const queueRight = [rootRight]
    while(queueLeft.length) {
        let left = queueLeft.shift()
        let right = queueRight.shift()
        // 如果两个节点都存在并且相等的就继续遍历
        if(left && right && left.val === right.val) {
            // 只要当前节点存在，就把左右节点都加进去，不管左右节点是否有值，没有值那就占位
            if(left) {
                queueLeft.push(left.left, left.right)
            }
            if(right) {
                // 注意加入的顺序和左边的是相反的，因为验证的是树的对称性
                queueRight.push(right.right, right.left)
            }
        } else if (!left && !right) {
            // 如果没有值继续遍历队列其他的节点
            continue
        } else {
            // 其他情况都是不对称的
            return false
        }

    }
    return true
};
// @lc code=end
const { TreeNode } = require('../数据结构/4.树/树')
const root = new TreeNode().createTree([2,3,3,4,5,5,4,null,null,8,9,null,null,9,8])
isSymmetric(root)