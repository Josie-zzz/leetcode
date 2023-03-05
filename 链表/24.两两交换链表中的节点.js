/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=curt
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}

function getNodeList (arr) {
    let head = null
    let pre = null
    if(arr.length){
        arr.forEach(val => {
            const node = new ListNode(val)
            if(!head) {
                head = node
            } else {
                pre.next = node
            }
            pre = node
        })
    }
    return head
}
// debugger
const nodeList = getNodeList([1,2,3,4])
// console.log(nodeList)

/**
 * 思考：首先写一个画一个经典的节点先解决着问题，然后在考虑极端情况
 * 交换节点，其实就是断开在重写连接的过程
 * 先断开当前节点curt的next往后插入：curt.next = curt.next.next
 * 在改变curt.next = curt
 * 然后在考虑交换前的前一个节点：可能是null(第一个节点)，可能不是
 * 存在则pre.next = curt.next
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    let pre = null
    let curt = head
    let newHead = head
    while (curt && curt.next) {
        const x = curt.next
        curt.next = x.next
        x.next = curt
        if (pre) {
            pre.next = x
        } else {
            newHead = x
        }
        pre = curt
        curt = curt.next
    }
    // debugger
    return newHead
}

// 递归版本实现，这个方法很机智，估计得后面就忘了，到时候再想想
// 1. 当前层级干的事就是交换
// 2. 返回子链

var swapPairs2 = function (head) {
    // 这种是基数节点和偶数节点遍历到最后该返回的
    if(!head || !head.next) {
        return head
    }

    const x = head.next
    // swapPairs2返回的是子链
    head.next = swapPairs2(x.next)
    x.next = head
    return x
}

console.log(swapPairs2(nodeList))
// @lc code=end
