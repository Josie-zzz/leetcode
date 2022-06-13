/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * 我的解法：其实倒叙是简化了计算的，就是十进制加法然后进位的计算，都是倒叙输出
 * 就是定义两个指针，进位变量记录，然后依次遍历想加，如果没有值的话就是0，直到没有值可以想加即可跳出循环
 * 时间复杂度：O(max(m, n))，m、n为链表的长度
 * 空间复杂度：空间复杂度：O(1)，注意返回值不计入空间复杂度。
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    //指向两个对象的指针
    let pointer1 = l1
    let pointer2 = l2
    //进位
    let carry = 0
    let result = null, p = null
    // 这俩链表只要是还在就要处理，遍历结束的话这两个指针会变成null，别忘了还有进位这个字段【最后的值也是有进位的可能】
    while(pointer1 || pointer2 || carry){
        const a = pointer1 ? pointer1.val : 0
        const b = pointer2 ? pointer2.val : 0
        const val = (a + b) + carry
        // debugger
        //取余的部分是留下的部分
        let node = new ListNode(val % 10)
        if(p){
            p.next = node
            p = node
        } else {
            result = p = node
        }
        // 去整部分的部分是进位的部分
        carry = Math.floor(val / 10)

        if(pointer1){
            pointer1 = pointer1.next
        }
        if(pointer2){
            pointer2 = pointer2.next
        }
    }
    // debugger
    return result
};


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
const a = arrToListNode([9,9,9,9,9])
const b = arrToListNode([9,9,9])
console.log(addTwoNumbers(a, b))
// @lc code=end

