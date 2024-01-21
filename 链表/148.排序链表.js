/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 递归合并两个有序链表
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

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * 因为题目要求时间复杂度为O(nlogn)，并且之前有排序链表的题，所以就用归并排序解决
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    // 遍历一遍拿到，链表长度
    let count = 0
    let p = head
    while(p) {
        count++
        p = p.next
    }
    if(count <= 1) {
        return head
    }

    // 拆分链表
    const splitLink = (count, link) => {
        // 如果是一个或者没有，认为已经排好序了
        if(!count || count === 1) {
            return link
        }
        const mid = Math.floor(count / 2)
        let midPre = link
        let num = 0
        while(midPre) {
            num++
            if(num === mid) {
                break
            }
            midPre = midPre.next
        }
        let right = splitLink(count - mid, midPre.next)
        // 将两个链表断开
        midPre.next = null
        let left = splitLink(mid, link)
        // 合并两个链表
        return mergeTwoLists(left, right)
    }

    return splitLink(count, head)
};
// @lc code=end
const { getLinkList } = require('../tools')
const link1 = getLinkList([4,2,1,3])

sortList(link1)