/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * 其实根绝题目意思：所有小于 x 的节点都放到 x 的前面，就知道肯定需要遍历一遍链表，才能拿到所有的小于 x 的节点
 * 思路就是：
 * 先遍历一遍数组，找到所有小于 x 的节点并加入到一个临时数组中，注意加进去的时候，要加入前一个节点，因为在单向链表中，如果需要删除一个节点，需要借助前一个节点才能完美删除
 * 然后在遍历临时数组，把节点一一从老的链表中删除，然后加入新的链表中
 * 最后拼接这俩链接即可
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if(!head) {
        return null
    }
    const list = []
    let p = head
    let pre = null
    // 先遍历链表找到所有小于 x 的
    while(p) {
        if(p.val < x) {
            list.push([p, pre])
        }
        pre = p
        p = p.next
    }
    // 然后在遍历 list，依次将这些节点从原来的链表中分离，并拼接到新的链表上
    let head2 = null
    let tail = null
    // 本来写的是从前往后遍历，最后注意到其实 pre 节点是会变的，所以就换成了从后往前，因为先操作后面的节点，所以 pre 不会变
    for(let i = list.length - 1; i >= 0; i --) {
        const [node, preNode] = list[i]
        // 从原来的链表中拆除
        // 注意判断不可以用preNode 为 null，因为 head 是会变的
        if(node === head) {
            head = node.next
        } else {
            preNode.next = node.next
        }
        node.next = null

        // 加入到新的链表中，每次添加从头部添加
        if(!head2) {
            head2 = node
            tail = node
        } else {
            node.next = head2
            head2 = node
        }
    }

    // 链如果操作过就链接两个链表
    if(tail) {
        tail.next = head
        return head2
    }
    return head
};
// @lc code=end

// 看了一下题解，其实我那样做有点麻烦了。。。
// 创建两个临时链表，一个放比 x 小的节点，一个放大于等于 x 的节点，最后拼在一起就行了
partition = function (head, x) {
    let minNodeHead = null
    let minNodeTail = null
    let bigNodeHead = null
    let bigNodeTail = null
    let p = head
    while(p) {
        if(p.val < x) {
            if(!minNodeHead) {
                minNodeHead = p
            } else {
                minNodeTail.next = p
            }
            minNodeTail = p
        } else {
            if(!bigNodeHead) {
                bigNodeHead = p
            } else {
                bigNodeTail.next = p
            }
            bigNodeTail = p
        }
        const next = p.next
        p.next = null
        p = next
    }
    if(minNodeTail) {
        minNodeTail.next = bigNodeHead
        return minNodeHead
    }
    return bigNodeHead
}


const { getLinkList } = require('../tools')
const nodeList = getLinkList([1,4,3,0,2,5,2])
partition(nodeList, 3)

