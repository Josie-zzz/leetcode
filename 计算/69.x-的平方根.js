/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * 使用二分法查找，效率会更高一点
 * 不断地折半查找一个接近目标值的一个数，检查平方是否等于目标数
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let l = 0
    let r = x
    while(l <= r) {
        // 找到中间值
        const m = Math.floor((l + r) / 2)
        // 比较，有三种情况
        if(Math.pow(m, 2) > x) {
            r = m - 1
        } else if (Math.pow(m, 2) < x) {
            l = m + 1
        } else {
            // 这个恰好等于的时候
            return m
        }
    }
    // 这种事没找到合适的值的时候，因为 r 会 -- ，所以不满足要求时候返回相对小的那个
    return r
};
// @lc code=end

console.log(mySqrt(4))
console.log(mySqrt(8))
console.log(mySqrt(16))