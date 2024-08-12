/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * 暴力解法：先求出阶乘，再算有几个0。
 * 暴力解法行不通，数太大了，case过不了
 * 感觉考的是智力不是逻辑了。。做这个没必要。。
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let num = 1n
    while(n) {
        num = num * BigInt(n)
        n --
    }
    let yu = 0
    while(num % BigInt(Math.pow(10, yu)) === 0n) {
        yu ++
    }
    return yu - 1
};
// @lc code=end

console.log(trailingZeroes(3))
console.log(trailingZeroes(5))
console.log(trailingZeroes(10))
console.log(trailingZeroes(30))