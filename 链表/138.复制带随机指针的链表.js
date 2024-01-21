/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * 如果没有随机指针，拷贝一个链表还是 ok 的，如果有随机指针，那其实就应该借助 hash 表存一下遍历过的节点
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    const hasObj = new Map()
    const clone = node => {
        if (!node) {
            return node
        }
        const newNode = { ...node }
        hasObj.set(node, newNode)
        newNode.next = clone(node.next)
        return newNode
    }
    const newHead = clone(head)
    // 复制完，统一处理random
    let p2 = newHead
    while (p2) {
        if (p2.random) {
            p2.random = hasObj.get(p2.random)
        }
        p2 = p2.next
    }

    return newHead
}
// @lc code=end

const { getLinkList } = require('../tools')
const link1 = getLinkList([4,2,1,3])
link1.next.random = link1.next.next
link1.random = link1.next.next

copyRandomList(link1)

/**
 * 方法 2：就不写代码了哈哈哈
 * 首先遍历每个节点，将复制节点插入到当前节点之后，最后得到节点为：1 -> 1' -> 2 -> 2' -> 3 -> 3' -> 4 -> 4'
 * 这样就可以通过节点的 next 找到新节点
 * 然后遍历链表设置 random 指针
 * 最后分离复制的链表
 */

