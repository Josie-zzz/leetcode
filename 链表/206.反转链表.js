/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function(head) {
    // 从第一个节点开始
    let curt = head
    // 储存前一个节点
    let pre = null
    // 当前节点还在，遍历到最后一个节点的next时候为null
    // 一定要遍历每个节点为基础，因为要修改它的指针
    while (curt) {
        const x = curt.next
        curt.next = pre
        pre = curt
        curt = x
    }

    return pre
};

/**
 * 递归解法：利用递归调用栈翻转next指向
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    const fn = (curt, pre) => {
        if(!curt) {
            // 返回新的头节点，最终会透传到最外层
            return pre
        }
        // 暂存下一个节点
        const x = curt.next
        // 翻转当前节点的指向
        curt.next = pre
        // 当前节点变成前节点，下一个节点变成当前节点，继续递归
        return fn(x, curt)
    }

    return fn(head, null)
}

// @lc code=end