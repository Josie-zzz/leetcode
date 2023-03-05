/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}


// leetcode 跑显示不通过，其实是没问题的，json是可以识别null的，我本地执行没有问题

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    // 对于二叉树的层序遍历
    const arr = []
    const stack = root ? [root] : []
    while(stack.length) {
        for(let i = 0; i < stack.length; i++) {
            const node = stack.shift()
            if(node.left) {
                stack.push(node.left)
            }
            if(node.right) {
                stack.push(node.right)
            }
            arr.push(node.val)
        }
    }

    return JSON.stringify(arr)
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    const arr = JSON.parse(data)
    const nodeArr = []
    let head = null

    // 检查有没有节点，没有才新建
    const getNode = (idx) => {
        if(nodeArr[idx]) {
            return nodeArr[idx]
        } else {
            const node = new TreeNode(arr[idx])
            nodeArr[idx] = node
            return node
        }
    }
    // 根据数组规律构建一颗二叉树
    if (arr.length) {
        // debugger
        for (let i = 0; i < Math.floor(arr.length / 2); i++) {
            const node = getNode(i)
            node.left = getNode(2 * i + 1)
            node.right = getNode(2 * i + 2)
            if(i == 0) {
                head = node
            }
        }
    }
    // debugger
    return head
}
const data = deserialize("[1,2,3,null,null,4,5]")
const data2 = serialize(data)
console.log(data2, data)

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
