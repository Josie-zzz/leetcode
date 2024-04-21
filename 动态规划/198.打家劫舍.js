/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // 存放每个下标下面最大偷到的金额
    const result = []
    for(let i = 0; i < nums.length; i ++) {
        // 如果偷的话，就等于当前金额加上上一个最大的金额
        const tou = nums[i] + (result[i - 2] || 0)
        // 如果不偷，就等于上一个的金额
        const butou = result[i - 1] || 0
        // 当前能偷到的最大金额就是两者最大的
        result[i] = Math.max(tou, butou)
    }
    console.log(result)
    return result[result.length - 1]
};
// @lc code=end

console.log(rob([1,2,3,1]))
console.log(rob([9, 1, 1, 9, 1, 1, 9]))