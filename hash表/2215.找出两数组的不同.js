/*
 * @lc app=leetcode.cn id=2215 lang=javascript
 *
 * [2215] 找出两数组的不同
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const arr1 = new Set(nums1)
    const arr2 = new Set(nums2)
    const result = [[], []]

    Array.from(arr1).forEach(v => {
      if(!arr2.has(v)) {
        result[0].push(v)
      }
    })
    Array.from(arr2).forEach(v => {
      if(!arr1.has(v)) {
        result[1].push(v)
      }
    })
    return result
};
// @lc code=end

