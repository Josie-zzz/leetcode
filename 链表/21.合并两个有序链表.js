/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 遍历解法
 * 将 list2 的节点试图拼接到 list1 上面，如果小于等于当前节点，就插入到前面去，list 2 自增，如果大于当前节点 list1 自增
 * 其实发现只有小于等于才操作节点，直到最后，如果当前节点都为 null 了，list2 还有节点未操作，直接拼接到 list1 最后面
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(!list1) {
        return list2
    } 
    if(!list2) {
        return list1
    }

    // 记录头节点，可能会变
    let head = list1
    let p1 = list1
    // 记录遍历节点的前一个节点，可能会插入到当前节点之前
    let preP1 = null
    let p2 = list2

    while(p2) {
        // 如果 p1遍历完了，p2 还有，就直接拼接，并置 p2 为 null，跳出循环
        if(!p1) {
            preP1.next = p2
            p2 = null
        } else if(p2.val <= p1.val) {
            // 如果小于等于当前节点，就执行插入操作。因为本来 list2 就是有序的，所以插入到当前节点之前也没啥问题
            const next = p2.next
            if(!preP1) {
                p2.next = p1
                head = p2
            } else {
                preP1.next = p2
                p2.next = p1
            }
            preP1 = p2
            p2 = next
        } else {
            // 如果是大于当前节点的话，就 list1 继续自增
            preP1 = p1
            p1 = p1.next
        }
    }
    return head
};
// @lc code=end

/**
 * 递归解法
 * 优先写终止条件，然后确认返回值，最后写判断逻辑
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const merge = (node1, node2) => {
        // 先找到终止条件 -- 如果任意一方没有节点，就返回另一边的节点
        if(!node1) {
            return node2
        }
        if(!node2) {
            return node1
        }
        // 如果 node1节点小，那就返回 node1，然后将 node1后面的节点和 node2 进行合并，否则同理
        if(node1.val <= node2.val) {
            node1.next = merge(node1.next, node2)
            return node1
        } else {
            node2.next = merge(node2.next, node1)
            return node2
        }
    }
    return merge(list1, list2)
};

const { getLinkList } = require('../tools')
const link1 = getLinkList([1])
const link2 = getLinkList([2])

mergeTwoLists(link1, link2)