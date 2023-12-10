/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * 首先想到的暴力解法
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let str1 = ''
    let str2 = ''
    let p = head
    while(p) {
        str1 = str1 + p.val
        str2 = p.val + str2
        p = p.next
    }
    if(str1 === str2) {
        return true
    }
    return false
};

/**
 * 参考 leetcode 的解决方法：将链表先变成数组，然后在数组的首尾进行一一比较
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const arr = []
    let p = head
    while(p) {
        arr.push(p.val)
        p = p.next
    }
    let l = 0
    let r = arr.length - 1
    while(r >= l) {
        if(arr[l] !== arr[r]) {
            return false
        }
        l++
        r--
    }
    return true
};
// @lc code=end

