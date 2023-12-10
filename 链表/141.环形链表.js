/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 无脑解法
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const arr = []
    let p = head
    while(p) {
        if(arr.includes(p)) {
            return true
        }
        arr.push(p)
        p = p.next
    }
    return false
};

/**
 * 快指针慢指针解法：设置两个指针，一个指针每次走一步，一个指针每次走两步
 * 快指针每走两步与慢指针的间隔就增加一个节点，如果存在环的话，快指针会追上慢指针的，那就证明有环
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head || !head.next) {
        return false
    }
    let fast = head
    let slow = head
    do {
        slow = slow.next
        fast = fast.next ? fast.next.next : null
        if(fast === slow) {
            return true
        }
    } while(fast && slow) 
    return false
};
// @lc code=end

