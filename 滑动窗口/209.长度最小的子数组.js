/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * 滑动窗口
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    // 记录最小长度
    let minLen = 0
    // 左右指针
    let left = 0
    let right = 0
    // 左右指针之间的数的总和
    let sum = nums[0]
    // 左右指针之间的长度
    let len = 1
    // 两个指针在数组范围内
    while(left <= right && right < nums.length) {
        // 如果总和小于目标值，右指针增加
        // 否则左指针增加
        if(sum < target) {
            right = right + 1
            // 总和增加，len 也增加
            sum = sum + nums[right]
            len ++
        } else {
            // 如果大于等于的话，就判断当前窗口是否满足条件
            if(minLen === 0 || len < minLen) {
                minLen = len
            }
            // 窗口左边缩减
            sum = sum - nums[left]
            left ++
            len --
        }

    }

    return minLen
};
// @lc code=end
minSubArrayLen(7, [2,3,1,2,4,3])
