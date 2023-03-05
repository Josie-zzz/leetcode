/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    // debugger
    const arr = []
    if(!root) {
        return arr
    }
    const stack = [root]
    let level = 0
    while (stack.length) {
        const curtLevel = stack.length
        for (i = 0; i < curtLevel; i++) {
            const node = stack.shift()
            if (node.left) {
                stack.push(node.left)
            }
            if (node.right) {
                stack.push(node.right)
            }

            if (arr[level]) {
                arr[level].push(node.val)
            } else {
                arr[level] = [node.val]
            }
        }
        level++
    }

    return arr
}



// 以下为测试用的
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

const p1 = new TreeNode(3)
const p2 = new TreeNode(9)
const p3 = new TreeNode(20)
const p4 = new TreeNode(15)
const p5 = new TreeNode(7)

p1.left = p2
p1.right = p3
p3.left = p4
p3.right = p5

console.log(levelOrder(p1))
// @lc code=end
