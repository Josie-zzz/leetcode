/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * 还得是利用深度优先算法，中序遍历二叉树，根绝平铺的特性，其实就是想办法在回溯的时候做点事情就好了遍历方式还是不变。
 * 那就是从末端开始处理，每次回溯的时候都是处理好的
 * 每一层都将右节点追加到左节点的末端就行了
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    const findRoot = (node) => {
        if(!node) {
            return null
        }
        // 拿到左节点
        let left = findRoot(node.left)
        // 拿到右节点
        let right = findRoot(node.right)
        // 将左节点设置为 null
        node.left = null
        let p = left
        // 如果左节点在的话
        if(p) {
            // 只有左节点在，才需要设置右节点等于它
            node.right = left
            // 因为是深度优先，所以可以假设所有子节点已经平铺好，那就需要找到左边节点最后一个节点，并把右子树追加上去
            while(p.right) {
                p = p.right
            }
            p.right = right
        }
        // 最后返回当前节点
        return node
    }
    findRoot(root)
};
// @lc code=end

const { TreeNode } = require('../数据结构/4.树/树')
const root = new TreeNode()
const rootTree = root.createTree([1,2,5,3,4,null,6])
flatten(rootTree)

