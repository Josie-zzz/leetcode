/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * 暴力解法，先缓存一个链表的节点，然后遍历另一个链表对比，找到相交的
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    const cache = []
    let p1 = headA
    while(p1) {
        cache.push(p1)
        p1 = p1.next
    }
    let p2 = headB
    while(p2) {
        if(cache.includes(p2)) {
            return p2
        }
        p2 = p2.next
    }
    return null
};
// @lc code=end

/**
 * 时间复杂度为 O（n）的方法，记一下，反正我也想不到
 * 链表 headA 和 headB 的长度分别是 m 和 n。
 * 假设链表 headA 的不相交部分有 a 个节点，链表 headB 的不相交部分有 b 个节点，两个链表相交的部分有 c 个节点，则有 a+c=m，b+c=n。
 * 详情看 leetcode，懒得记了，因为我脑子想不到
 */
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) {
        return null
    }
    let p1 = headA
    let p2 = headB
    while(p1 != p2) {
        p1 = p1.next ? p1.next : headB
        p2 = p2.next ? p2.next : headA
    }
    return p1
};