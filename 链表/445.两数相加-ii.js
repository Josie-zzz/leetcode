/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const num1 = []
    const num2 = []

    let p1 = l1
    let p2 = l2
    while (p1 || p2) {
        if (p1) {
            num1.push(p1.val)
            p1 = p1.next
        }
        if (p2) {
            num2.push(p2.val)
            p2 = p2.next
        }
    }

    let carry = 0
    let pointer1 = num1.length - 1
    let pointer2 = num2.length - 1
    let head = null
    while (pointer1 >= 0 || pointer2 >= 0 || carry) {
        const add = (num1[pointer1] || 0) + (num2[pointer2] || 0) + carry
        const curt = add % 10
        carry = Math.floor(add / 10)
        // debugger
        const node = new NodeList(curt)
        if (head) {
            node.next = head
            head = node
        } else {
            head = node
        }
        pointer1--
        pointer2--
    }

    return head
}

// @lc code=end
