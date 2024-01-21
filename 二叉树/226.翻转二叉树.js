/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * 其实就是每一个节点的左右调换而已，那就利用递归遍历到每个节点
 * 递归的返回值就是节点本身，然后在给左右节点赋值就行了
 * 注意用中间值缓存
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) {
        return null
    }
    const findNode = (node) => {
        if(node) {
            // 先暂存 left，因为要改他的值
            let left = node.left
            node.left = findNode(node.right)
            node.right = findNode(left)
        }
        return node
    }

    return findNode(root)
};
// @lc code=end

