/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
var zigzagLevelOrder = function(root) {
    if(!root) {
        return []
    }
    const queue = [[root]]
    // 代表当前待探索的位置
    let index = 0
    while(index < queue.length) {
        // 生成的新数组
        const arr = []
        const current = queue[index]
        // 探索当前数组的数据
        for(let i = 0; i < current.length; i++) {
            // 有才push
            if(current[i].left) {
                arr.push(current[i].left)
            }
            if(current[i].right) {
                arr.push(current[i].right)
            }
        }
        // 这个数组有内容才push
        if(arr.length) {
            queue.push(arr)
        }
        // 指针+1继续探索
        index ++
    }
    return queue.map((v, i) => {
        const a = v.map(v => v.val)
        if(i % 2 !== 0) {
            return a.reverse()
        }
        return a
    })
};
// @lc code=end
const { TreeNode } = require('./数据结构/4.树/树')
const root = new TreeNode()
const rootTree = root.createTree([1,2,3,4,null,null,5])
debugger
console.log(zigzagLevelOrder(rootTree))
