const { TreeNode } = require('./数据结构/4.树/树')
/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * 其实不难发现，中序遍历就是从小到大遍历，所以利用这个就可以依次从最小值开始打印
 * 然后每次找到最小值就 k --，最后就可以找到了
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const stack = []
    let p = root
    let target = null
    while((p || stack.length) && k) {
        if(p) {
            stack.push(p)
            p = p.left
        } else {
            const node = stack.pop()
            target = node
            k --
            p = node.right
        }
    }
    return target.val
};

const curtTree = (new TreeNode()).createTree([1,null,2])
kthSmallest(curtTree, 2)
debugger
// @lc code=end

