/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(k % (nums.length) === 0) {
        return nums
    }
    const newK = k % nums.length
    const arr1 = nums.slice(nums.length - newK)
    // const arr2 = nums.slice(0, nums.length - newK)
    let idx = nums.length - newK
    let arr = nums
    for(let i = nums.length - 1; i >= 0; i--) {
        idx = idx - 1
        if(idx < 0) {
            idx = arr1.length - 1
            arr = arr1
        }
        nums[i] = arr[idx]
    }
    // nums = arr1.concat(arr2)
};
const nums = [1,2,3,4,5,6,7]
// @lc code=end
console.log(rotate(nums, 3), nums)

