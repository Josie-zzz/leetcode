/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * 还是得画图。。不然能绕进去
 * 找到需要翻转的部分，然后操作，就是边界条件限制太多了。。。
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(!left || !right || left == right) {
        return head
    }
    let pointer = head
    let cnt = 1
    let pre = null

    // 记录四个节点
    let leftNode = null
    let rightNode = null
    let leftPreNode = null
    let rightNextNode = null
    // debugger
    while(pointer) {
        // 标记节点
        if(cnt == left) {
            leftNode = pointer
            leftPreNode = pre
        } else if(cnt == right) {
            rightNode = pointer
            rightNextNode = pointer.next
        }
        // 在这个区间的才翻转，先把这部分翻转了
        if(cnt >= left && cnt <= right) {
            const x = pointer.next
            pointer.next = pre
            pre = pointer
            pointer = x
        } else {
            pre = pointer
            pointer = pointer.next
        }

        cnt++
    }
    // debugger
    // 开始操作剩下部分，要考虑极端情况
    if(!leftPreNode && !rightNextNode) {
        return rightNode
    } else if(!leftPreNode) {
        leftNode.next = rightNextNode
        return rightNode
    } else {
        leftPreNode.next = rightNode
        leftNode.next = rightNextNode
        return head
    }
};

// 虽然前面解决了问题，但是思考的太复杂了，把自己绕进去了，看了官网的解题思路如下
const reverseBetween2 = (head, left, right) => {
    // 因为可能存在修改头节点，问题变复杂，所有引入一个虚的节点
    const preHead = new ListNode(0)
    preHead.next = head
    let curtNode = preHead
    // 找到left前一个节点存起来
    for(let i = 0; i < left - 1; i++) {
        curtNode = curtNode.next
    }
    let preLeftNode = curtNode
    let preNode = preLeftNode
    curtNode = preLeftNode.next
    // 遍历翻转，从left开始，和之前的普通翻转一样
    for(let i = left; i <= right; i++) {
        const x = curtNode.next
        curtNode.next = preNode
        preNode = curtNode
        curtNode = x
    }

    // debugger
    const leftNode = preLeftNode.next
    preLeftNode.next = preNode
    leftNode.next = curtNode

    return preHead.next
}


//下面内容作为测试用
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function arrToListNode (arr){
    let node = null, p = null
    arr.forEach(v => {
        let newNode = new ListNode(v)
        if(p){
            p.next = newNode
            p = newNode
        } else {
            node = p = newNode
        }
    })
    return node
}
const a = arrToListNode([1,2,3,4,5])
console.log(reverseBetween2(a, 2, 4))
// @lc code=end

