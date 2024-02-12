/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    // 先遍历一遍找到所有重复的节点
    const repeat = new Set()
    const hashMap = new Map()
    let p = head
    while(p) {
        if(!hashMap.has(p.val)) {
            hashMap.set(p.val, p)
        } else {
            repeat.add(p)
            if(!repeat.has(hashMap.get(p.val))) {
                repeat.add(hashMap.get(p.val))
            }
        }
        p = p.next
    }

    // 在遍历一遍链表，去除重复的节点
    p = head
    let pre = null
    while(p) {
        if(repeat.has(p)) {
            if(p === head) {
                head = p.next
            } else {
                pre.next = p.next
            }
        } else {
            pre = p
        }
        p = p.next
    }

    return head
};

// 看了下别人的题解，发现解法也太多了，我的解法还是太过单一了。。

// 解法 2：遍历一遍链表，因为是排好序的，所以相同的数都是挨着的，所以利用这一点就可以操作了
// 这里有一个小技巧：利用哑结点，因为可能会删除头节点，所以用这个哑结点会更好操作
// 下面是我根据题解的思路自己写的，后来参考题解写法比我的还简洁一点，看来还是得慢慢练，才会写的更加优雅
deleteDuplicates = function (head) {
    // 创建一个哑结点，因为头节点可能会删除，这样操作链表会更方便
    const dummy = new ListNode()
    dummy.next = head
    let p = dummy
    // 指向下一个节点
    let left = p.next
    // 指向下下一个节点
    let right = left ? p.next.next : null
    // 如果两个都在才有操作的必要
    while(left && right) {
        if(left.val === right.val) {
            // 如果相等的话，右指针就继续找，直到找到一个不相等的
            while(right && right.val === left.val) {
                right = right.next
            }
            // 然后让 p 指向这个不想的数，就相当于把前面相等的节点都删了
            p.next = right
            // 重置左右指针
            left = p.next
            right = left ? p.next.next : null
        } else {
            // 如果不相等，就将左右指针一个一个往后移，逐个检查
            left = left.next
            right = right.next
            // 别忘了还有 p 指针
            p = p.next
        }
    }

    // 返回哑结点的 next，就是头节点
    return dummy.next
}

// @lc code=end
const { getLinkList } = require('../tools')
const link = getLinkList([1,2,3,3,4,4,5])
deleteDuplicates(link)