/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * 这个题就是得画图然后找规律才能做出来的，
 * 先序遍历是每个根节点出现的顺序，根据先序遍历可以以此找到根节点
 * 中序遍历可以确定节点的左右两个子树分别是什么，相当于每次根据先序的索引划分中序的数据，以此慢慢找到根节点并返回，就可以构成一个树了
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    let p = 0
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
        const val = preorder[p]
        const rootIdx = map.get(val)
        const root = new TreeNode(val)
        // 移动p指针指向下一个根节点
        p ++
        // 继续探索左数组和右数组
        root.left = findeRoot(left, rootIdx - 1)
        root.right = findeRoot(rootIdx + 1, right)
        // 最终返回root
        return root
    }
    return findeRoot(0, inorder.length -1)
};
// @lc code=end
const tree = buildTree([1,2,4,5,3,6,7], [4,2,5,1,6,3,7])
console.log(tree)