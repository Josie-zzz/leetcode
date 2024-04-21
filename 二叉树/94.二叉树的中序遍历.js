/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * 递归方式 -- 这种方式是最简单，最好理解的
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const arr = []
    const findNode = (node) => {
        if(!node) {
            return
        }
        findNode(node.left)
        arr.push(node.val) //放这里是中序，放在前面就是先序，放在后面就是后序
        findNode(node.right)
    }

    findNode(root)
    return arr
};

/**
 * 非递归：栈的方式
 * 其实就是用栈模拟递归调用栈
 * 先序和中序都可以用这个，后序貌似不行啊
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = (head) => {
    const result = []
    // 使用栈来存储
    const stack = []
    let p = head
    // 如果 p 指针还在或者栈内还有元素就继续
    while(p || stack.length) {
        // 深度优先，如果 p 在的话就加入栈中待探索
        if(p) {
            stack.push(p)
            p = p.left
        } else {
            // 如果 p 不在，说明 p 已经到叶子了，那就 pop 栈中的元素访问
            // 因为栈中存的都是根节点或者说是左节点，所以符合预期，然后在修改 p 指针指向右节点
            const node = stack.pop()
            result.push(node.val)
            p = node.right
        }
    }
    return result
}
// @lc code=end

