/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * 简单的递归版本
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const arr = []
    const findNode = (node) => {
        if(!node) {
            return
        }
        findNode(node.left)
        findNode(node.right)
        arr.push(node.val) //放这里是中序，放在前面就是先序，放在后面就是后序
    }

    findNode(root)
    return arr
};
/**
 * 非递归版本：后序遍历非递归版本应该是最难的
 * 因为后序遍历需要两次经过根节点，所以遍历的时候需要根据第几次路过来决定是否访问根节点。
 * 解决的办法是增加一个 prev 指针，指向上次访问的节点，当 prev 指向root.right的时候那么就是该遍历root。
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const arr = []
    const stack = []
    let prev = null
    let p = root
    while(p || stack.length) {
        if(p) {
            stack.push(p)
            p = p.left
        } else {
            // 访问根节点，主要不是 pop
            p = stack[stack.length - 1]
            // 如果此节点右边还有节点，并且上一个访问的不是右节点，则继续访问
            if(p.right && p.right !== prev) {
                p = p.right
            } else {
                // 如果此节点右边没有节点 或者 右边节点都访问过，则访问当前节点
                const node = stack.pop()
                arr.push(node.val)
                // 在被访问的时候暂存就行了
                prev = p
                // 这里设置为 null，好进入下一轮 pop
                p = null
            }
        }
    }

    return arr
};
// @lc code=end

