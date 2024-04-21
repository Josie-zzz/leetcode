/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const result = []
    let index = 1
    while(index <= n) {
        const count = [1,2].reduce((count, curVal) => {
            const val = index - curVal
            let num = 0
            if(val > 0) {
                num = result[val]
            }
            if(val === 0) {
                num = 1
            }
            return count + num
        }, 0)
        result[index] = count
        index ++
    }
    console.log(result)
    return result[result.length - 1]
};
// @lc code=end
console.log(climbStairs(10))
