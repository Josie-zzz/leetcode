/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * 题目要求用二分法，所以得往这个上面靠拢
 * 两次二分法：第一次二分找到最靠近左边的 target，第二次二分找到最靠近右边的target
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start = 0
    let end = nums.length - 1
    let left = -1
    let right = -1
    // 先找到最左边的
    while(start <= end) {
        const mid = Math.floor((start + end) / 2)
        if(target === nums[mid]) {
            left = mid
            // 重置 end，看是否还可以再找到一个
            end = mid - 1
        } else if (target > nums[mid]) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }

    // 在先找到最右边的
    start = 0
    end = nums.length - 1
    while(start <= end) {
        const mid = Math.floor((start + end) / 2)
        if(target === nums[mid]) {
            right = mid
            // 重置 start，看是否还可以再找到一个
            start = mid + 1
        } else if (target > nums[mid]) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }

    return [left, right]
}
// @lc code=end
console.log(searchRange([5,7,7,8,8,10], 8))
