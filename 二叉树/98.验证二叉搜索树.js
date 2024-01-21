/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * 像这样的题，一般都是要遍历二叉树的
 * 中序遍历搜索二叉树，是按照从小到大打印的，所以利用这一点可以很容易比较
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    // 定义一个栈，存放遍历到的节点
    const stack = []
    // 定一个指针指向根节点
    let p = root
    let prev = null
    // 如果 p 还有值，或者 stack 里面还有值，就一直遍历
    while(p || stack.length) {
        if(p) {
            // 将当前节点压入栈
            stack.push(p)
            // 探索左节点
            p = p.left
        } else {
            // 弹出节点，打印节点
            const node = stack.pop()
            // 每次弹出节点之前和上一次弹出的进行比较
            if(prev && prev.val >= node.val) {
                return false
            }
            // 缓存每次弹出的节点
            prev = node
            // 继续探索节点
            p = node.right
        }
    }

    return true
};
// @lc code=end

const { TreeNode } = require('../数据结构/4.树/树')
const helper = (root, lower, upper) => {
    if (root === null) {
        return true;
    }
    if (root.value <= lower || root.value >= upper) {
        return false;
    }
    return helper(root.left, lower, root.value) && helper(root.right, root.value, upper);
}
var isValidBST2 = function(root) {
    return helper(root, -Infinity, Infinity);
};

const root = new TreeNode()
const rootTree = root.createTree([5,4,6,null,null,3,7])
isValidBST2(rootTree)
// debugger

