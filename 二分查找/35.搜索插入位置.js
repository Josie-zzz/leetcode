/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * 利用二分法，注意分完后 mid 得加 1 或者减 1，否则会导致死循环
 * 不过要注意题目中如果目标值没有的话就得返回它应该在的位置
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const findIndex = (start, end) => {
        // 这里的判断还得看 case，不然还真想不到那么细
        if(end - start <= 1) {
            if(target <= nums[start]) {
                return start
            } else if(target <= nums[end]) {
                return end
            } else {
                return end + 1
            }
        }
        // 只有至少三个数才有必要划分
        const mid = Math.floor((start + end) / 2)
        if(target > nums[mid]) {
            return findIndex(mid + 1, end)
        } else if(target < nums[mid]) {
            return findIndex(start, mid - 1)
        } else {
            return mid
        }
    }

    return findIndex(0, nums.length - 1)
};
// @lc code=end

// 参考 leetcode 别人的解题，有个更简洁版本
searchInsert = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    while(left <= right) {
        const mid =  Math.floor((left + right) / 2)
        // 如果大于中间值，移动左指针，如果小于移动右指针
        if(nums[mid] < target) {
            left = mid + 1
        } else if (target < nums[mid]) {
            right = mid - 1
        } else {
            return mid
        }
    }
    // 返回 left 是因为，可以返回 length 的位置，但是 -1 不行
    return left
}