/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * 其实也可以遍历去乘，但是可能会有很多不必要的计算，所以每次将指数减半，可以避免重复计算从而减少时间复杂度
 * 正数和负数主要逻辑一致，只是最终结果取倒即可
 * 时间复杂度：O(n)
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    const calculate = (x, n) => {
        if(n === 0) {
            return 1
        }
        if(n === 1) {
            return x
        }
        if(n === 2) {
            return x * x
        }
        const n1 = Math.floor(n / 2)
        const yu = n % 2
        return myPow(myPow(x, 2), n1) * (yu ? x : 1)
    }
    if(n > 0) {
        return calculate(x, n)
    }
    return 1 / calculate(x, n * -1)
};
// @lc code=end

console.log(myPow(2, 10))
// console.log(myPow(2.1, 3))
console.log(myPow(2, -2))