/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * 放弃。。。。搞不清楚。。。
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    while(left <= right) {
        const mid = Math.floor((left + right) / 2)
        if(nums[mid] === target) {
            return mid
        }
        if(nums[left] <= nums[mid]) {
            if(nums[left] <= target && target < nums[mid]) {
                right = mid - 1
            } else {
                left = mid
            }
        } else {
            if(target > nums[mid] || target < nums[right]) {
                left = mid + 1
            } else if (target < nums[mid] || target > nums[right]) {
                right = mid - 1
            }
        }
        
    }

    return -1
};
// @lc code=end

search([4,5,6,7,0,1,2], 0)
search([3, 1], 1)
search([5, 1, 3], 5)
search([0, 3], 5)