/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
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

// 根据路径计算值
const getNumFormPath = (path) => {
    const len = path.length
    let num = 0
    for(let i = len - 1; i >= 0; i --) {
        num += path[i] * Math.pow(10, len - 1 - i)
    }
    return num
}
/**
 * 这道题分成两个步骤：拿到所有根节点到叶子的路径；计算每个路径之和
 * 想拿到所有的路径可以利用栈，可以用后序遍历的方式遍历二叉树，因为后序遍历最后访问根节点，当访问叶子节点时，栈的节点刚好就保存所有祖先节点
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    const allPath = []
    const arr = []
    // 用栈保存待探索的元素
    const stack = []
    // 上一个打印的节点
    let preNode = null
    // 如果当前指针有值或者栈中还有节点就继续探索
    while(root || stack.length) {
        // 如果当前节点有值，就优先遍历左子树
        if(root) {
            stack.push(root)
            root = root.left
        } else {
            // 检查下栈顶元素，判断上一个访问的node是否是这个节点的右节点，后序遍历根节点会被访问两次
            const peekNode = stack[stack.length - 1]
            // 如果当前节点右节点有值，并且上一个节点不是右节点，就探索。注意没有preNode !== peekNode.right判断会陷入死循环
            if(peekNode.right && preNode !== peekNode.right) {
                root = peekNode.right
            } else {
                // 访问节点，弹出节点
                const node = stack.pop()
                arr.push(node.val)
                // 重置上一个节点
                preNode = node
                // 重置，逻辑走到处理栈中
                root = null

                // 判断node是否是叶子节点
                if(!node.left && !node.right) {
                    allPath.push(stack.concat(node).map(v => v.val))
                }
            }
        }
    }
    console.log(allPath)
    return allPath.reduce((pre, crt) => {
        return pre + getNumFormPath(crt)
    }, 0)
};
// @lc code=end

/**
 * 看了下题解，还有更简单的方式，不过确实没有我写的直观。。
 * 大致思路就是左右子树节点之和，只是每次计算每一层的时候都会*10
 */
sumNumbers = function(root) {
    const dfs = (node, preSum) => {
        if(!node) {
            return 0
        }
        // 计算到当前位置的数的大小
        const sum = preSum * 10 + node.val
        // 如果是叶子结点就返回当前值
        if(!node.left && !node.right) {
            return sum
        }
        // 如果不是叶子节点，就返回左右相加的值
        return dfs(node.left, sum) + dfs(node.right, sum)
    }
    return dfs(root, 0)
}

const { TreeNode } = require('../数据结构/4.树/树')
const tree = new TreeNode().createTree([1,2,3])
const tree2 = new TreeNode().createTree([1,2,3,4,5,6,7])
console.log(sumNumbers(tree))
console.log(sumNumbers(tree2))