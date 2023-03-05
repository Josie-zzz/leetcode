/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const stack = []
    let pointer = head
    while(pointer) {
        stack.push(pointer)
        pointer = pointer.next
    }
    // 找到待删除节点
    const idx = stack.length - n
    if(idx >= 0) {
        const del = stack[idx]
        if(del == head) {
            return head.next
        } else {
            const pre = stack[idx - 1]
            pre.next = del.next
        }
    }
    return head
};
// @lc code=end

