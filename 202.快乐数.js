/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * 这里我使用方法将数字转化为字符串，查了下时间复杂度是 O(1) ，如果需要自己手动实现，时间复杂度可能会是 O(k)，其中 k 是数字的位数。
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(x) {
    // 保存判断过的数字，避免出现栈溢出
    const coll = new Set()
    const deep = (n) => {
        // 如果出现过或者当前数超出限制就返回false
        if(coll.has(n) || n >= Math.pow(2, 31) - 1) {
            return false
        }
        // 将当前数加入到集合中
        coll.add(n)
        // 转换成字符串遍历
        const str = String(n)
        let sum = 0
        for(let i = 0; i < str.length; i ++) {
            sum += str[i] * str[i]
        }
        if(sum !== 1) {
            return deep(sum)
        }
        return true
    }
    return deep(x)
};
// @lc code=end

const getSum = (n) => {
    // 转换成字符串遍历
    const str = String(n)
    let sum = 0
    for(let i = 0; i < str.length; i ++) {
        sum += str[i] * str[i]
    }
    return sum
}

// 循环版本
isHappy = function(n) {
    // 保存判断过的数字，避免出现栈溢出
    const coll = new Set()
    while(n !== 1) {
        if(coll.has(n)) {
            return false
        }
        coll.add(n)
        n = getSum(n)
    }
    return true
};

// 快慢指针版本，通过快慢指针可以判断一个链表是否有环
isHappy = function(n) {
    // 初始化都为 n
    let slow = n, fast = n
    do {
        // 快指针走两步，慢指针走一步
        slow = getSum(slow)
        fast = getSum(fast)
        fast = getSum(fast)
    } while(fast !== slow)
    return fast === 1
};


console.log(isHappy(19))
console.log(isHappy(2))
console.log(isHappy(7))