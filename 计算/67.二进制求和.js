/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * 太简单了。。。
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let carry = 0
    let i = a.length - 1
    let j = b.length - 1
    let result = ''
    // 如果三者只有有一个有值就需要相加
    while(i >= 0 || j >= 0 || carry) {
        // 兼容没值的情况，三者相加
        const s = carry + Number(a[i] || 0) + Number(b[j] || 0)
        // 分为有无进位的情况
        if(s > 1) {
            carry = 1
            // 取余，留下 2 以内的那部分
            result = s % 2 + result
        } else {
            carry = 0
            result = s + result
        }
        i --
        j --
    }
    return result
};
// @lc code=end

console.log(addBinary("11", '1'))
console.log(addBinary("1010", "1011"))
console.log(addBinary("1111", "1111"))