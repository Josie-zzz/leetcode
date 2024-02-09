/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * 感觉这个题和寻找第 k 个数异曲同工，因为旋转的话，数的相对位置是不变的，所以就只需要找到短接处就行了
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    // 遍历链表拿到节点总数
    let p = head
    let count = 0
    let tail = null
    while(p) {
        count ++
        if (!p.next) {
            tail = p
        }
        p = p.next
    }
    // 因为是旋转，转完一个 count会回到原点，所以用 k 取余
    const newK = k % count
    // 也就是倒数第 newK 处截断【正数第 count - newK】，拼到头节点之前
    if(newK) {
        const num = count - newK
        let cal = 0
        let find = head
        while(find) {
            cal ++
            if(cal === num) {
                break
            }
            find = find.next
        }
        tail.next = head
        head = find.next
        find.next = null
    }
    return head
};
// @lc code=end

// 参考官网和我思路一模一样，但是优化一下代码
rotateRight = function (head, k) {
    if(k === 0 || !head || !head.next) {
        return head
    }

    let count = 1
    let p = head
    while(p.next) {
        count ++
        p = p.next
    }

    let cal = count - k % count
    // 如果等于总数的话就返回 head，因为没有寻找的必要了
    if(cal === count) {
        return head
    }

    // 让尾结点指向头节点，这一点好机智啊！！
    // 从尾结点开始寻找，找到对应的节点直接断开就行了
    p.next = head
    while(cal) {
        p = p.next
        cal --
    }
    // 结束后，p 所在的位置就是要断开的位置
    head = p.next
    p.next = null
    return head
}

const { getLinkList } = require('../tools')
const node = getLinkList([1,2])
rotateRight(node, 1)