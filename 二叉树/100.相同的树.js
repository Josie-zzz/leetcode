/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * 其实还是遍历二叉树，同时遍历两颗树，只是在遍历的过程中判断当前节点是否相等
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const stack1 = []
    const stack2 = []
    // 因为他们的节点数不一定一致
    while(p || stack1.length || q || stack2.length) {
        // 如果当前节点不相等就返回false
        if (!(p === null && q === null || p && q && p.val === q.val)) {
            return false
        }
        // 同时遍历即可
        if(p) {
            stack1.push(p)
            stack2.push(q)
            p = p.left
            q = q.left
        } else {
            const node = stack1.pop()
            const node2 = stack2.pop()
            p = node.right
            q = node2.right
        }
    }
    return true
};
// @lc code=end

const { TreeNode } = require('../数据结构/4.树/树')

// const tree = new TreeNode().createTree([1,2])
// const tree2 = new TreeNode().createTree([1, null,2])
// const tree = new TreeNode().createTree([])
// const tree2 = new TreeNode().createTree([0])
const tree = new TreeNode().createTree([1,2,3])
const tree2 = new TreeNode().createTree([1,2,3])
console.log(isSameTree(tree, tree2))