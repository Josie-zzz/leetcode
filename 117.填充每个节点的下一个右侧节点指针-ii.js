/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * 层序遍历，将每一层存储起来，然后在遍历修改next指针
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    if(!root) {
        return null
    }
    // 保存每一层
    const level = [[root]]
    let i = 0
    while(i < level.length) {
        const arr = level[i]
        const l = []
        // 遍历每一层并保存
        for(let j = 0; j < arr.length; j++) {
            if(arr[j].left){
                l.push(arr[j].left)
            }
            if(arr[j].right){
                l.push(arr[j].right)
            }
        }
        // 如果有就push
        if(l.length) {
            level.push(l)
        }
        // 别忘了 ++
        i ++
    }
    // 遍历修改next指向
    level.forEach(l => {
        for(let j = 0; j < l.length; j++) {
            l[j].next = l[j + 1] || null
        }
    })
    return root
};
// @lc code=end

const { TreeNode } = require('./数据结构/4.树/树')
const root = new TreeNode()
const rootTree = root.createTree([1,2,3,4,5,null,7])
console.log(connect(rootTree))