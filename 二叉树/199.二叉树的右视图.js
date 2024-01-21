/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * error
 * 这个是错误的，并不是简单的遍历p.right这么简单，毕竟是一个中等难度的题
 * 如果没有右节点，注意从右边会看到部分左节点的
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    const stack = []
    let p = root
    while(p) {
        stack.push(p.val)
        p = p.right
    }
    return stack
};

const { TreeNode } = require('../数据结构/4.树/树')

/**
 * 感觉可以利用广度优先遍历，广度优先的话，可以层序遍历节点，然后就是想办法拿到每一层的最后一个节点就行了
 * 这里定义两个指针：current【代表当前访问节点】、last【当前要访问层级的最后一个节点】
 * 每次当current === last 的时候，说明探索到当前层的最后一个节点了，那么此时队列中的最后一个节点就是下一个层级的最后一个节点
 * 这个时候就重置并且记录就行，要注意判断是否为空，因为最后一层的时候队列没有数据了
 * 。。。哈哈哈我还挺聪明的。。。
 * @param {TreeNode} root
 * @return {number[]}
 */
rightSideView = function(root) {
    if(!root) {
        return []
    }
    let current = root
    let last = current
    const arr = [current.value]
    const queue = [current]
    // 二维数组，存每一层的
    while(queue.length) {
        current = queue.shift()
        if(current.left) {
            queue.push(current.left)
        }
        if(current.right) {
            queue.push(current.right)
        }
        if(last === current) {
            last = queue[queue.length - 1]
            if(last) {
                arr.push(last.value)
            }
        }
    }
    return arr
};

const treeNode = new TreeNode()
const root = treeNode.createTree([1,2,3,null,5,null,4])
rightSideView(root)
// @lc code=end

