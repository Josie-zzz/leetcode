/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * 跟105那道题几乎一模一样，只是后序遍历是反着来的
 * 后序反向确认根节点，中序遍历中右左既可
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let p = postorder.length - 1
    const map = new Map()
    // 保存中序数组，方便划分数组时索引的方便取出 O(n)
    inorder.forEach((v, i) => map.set(v, i))
    // 递归遍历中序数组
    const findeRoot = (left, right) => {
        // 如果右指针小于左指针了，说明探索完了就返回null
        if(right < left) {
            return null
        }
        // 拿到并创建当前根节点
        const val = postorder[p]
        const rootIdx = map.get(val)
        const root = new TreeNode(val)
        // 移动p指针指向下一个根节点
        p --
        // 继续探索左数组和右数组
        root.right = findeRoot(rootIdx + 1, right)
        root.left = findeRoot(left, rootIdx - 1)
        // 最终返回root
        return root
    }
    return findeRoot(0, postorder.length -1)
};
// @lc code=end

const tree = buildTree([4,2,5,1,6,3,7], [4,5,2,6,7,3,1])
console.log(tree)