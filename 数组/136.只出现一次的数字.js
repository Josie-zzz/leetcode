/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * 这道题有一个要求是：线性时间复杂度的算法来解决此问题，且该算法只使用常量额外空间
 * 那就只能先排序，然后在遍历一遍数据找到一个数的。时间复杂度就是 nlogn + n 约等于 nlogn
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort((a, b) => a - b)
    for(let i = 0; i < nums.length; i = i + 2) {
        if(nums[i] !== nums[i + 1]) {
            return nums[i]
        }
    }
    return -1
};
// @lc code=end

/**
 * 看了题解，满足题意的要求，可以用异或运算解决，emm 这确实很难想到
 * 异或运算规律：
 * 任何数和 0 做异或运算，结果仍然是原来的数，即 a ^ 0 = a
 * 任何数和其自身做异或运算，结果是 0 即 a ^ a = 0
 * 异或运算满足交换律和结合律
 */
singleNumber = function(nums) {
    let init = nums[0]
    for(let i = 1; i < nums.length; i++) {
        init = init ^ nums[i]
    }
    return init
};
