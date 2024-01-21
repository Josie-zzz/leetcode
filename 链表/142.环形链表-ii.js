/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * 利用双指针，但他们在同一个节点时，说明快的追上了慢的，说明快的走了数量是慢的两倍
 * 所以想着比较他们的前一个节点是否相等来看，但是一些短链的 case 没过
 * @param {ListNode} head
 * @return {ListNode}
 */
//error
var detectCycleBad = function(head) {
    let head1 = head
    let head2 = head
    let head1Pre = null
    let head2Pre = null
    do {
        if(head1.next) {
            head1Pre = head1
            head1 = head1.next
        } else {
            return null
        }
        if(head2.next.next) {
            head2Pre = head2.next
            head2 = head2.next.next
        } else {
            return null
        }
    } while(head1 !== head2)

    if(head1Pre === head2Pre) {
        return head1.next
    } else {
        return head1
    }
};

/**
 * 一个是利用双指针，再一个是找到快慢指针之间的规律，利用规律最终得出结论，感觉有点拼脑子的感觉
 * 具体做法：
 * 首先因为快指针（f）走两步，慢指针(s)走一步，所以得出关系：f = 2s
 * 第一次相遇时：针对相遇的节点，f 比 s 多走了 nb【b 是环的长度，n 是几圈的意思】，所以可以得出关系：f = s + nb
 * 所以又可以得到：s = nb；所以第一次相遇 s 相当于走了 nb 步
 * 每次到达入口节点需要走的步数为：a + nb 【a 是从开始到入口的步数】
 * 由上面可以知道 s 再走 a 步岂不是就能到达入口了，但是 a 不知道啊
 * 可是从开始到入口也是 a步
 * 所以设置指针再开始处，两个指针同时向前一步，直到相遇，那个节点一定是入口节点，他们都走了 a 步。
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head
    let fast = head
    // 第一次相遇
    do {
        // 只判断 fast 就行了
        if(!fast || !fast.next) {
            return null
        }
        slow = slow.next
        fast = fast.next.next
    } while(slow !== fast)

    // 让 fast 指向开头
    fast = head
    while(slow !== fast) {
        slow = slow.next
        fast = fast.next
    }
    
    return fast
};

// @lc code=end

const node1 = new ListNode(3)
const node2 = new ListNode(2)
const node3 = new ListNode(0)
const node4 = new ListNode(4)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node2

detectCycle(node1)