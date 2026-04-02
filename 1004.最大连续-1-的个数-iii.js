/*
 * @lc app=leetcode.cn id=1004 lang=javascript
 *
 * [1004] 最大连续1的个数 III
 */

// @lc code=start
/**
 * tag: 没彻底成功
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
  let left = 0
  let right = -1
  let count = k
  // 先把右指针挪到合适的位置
  while(count > 0) {
    if(nums[right + 1] === 1) {
      right ++
    } else {
      right ++
      count --
    }
  }
  // 开始挪动窗口
  let max = right - left + 1
  while(right < nums.length) {
    // 找到第一个0
    while(count === 0) {
      if(nums[left] === 0) {
        count ++
      }
      left ++
    }
    // 将right继续向后挪动
    while(count || nums[right + 1] === 1) {
      if(nums[right + 1] === 1) {
        right ++
      } else {
        right ++
        count --
      }
    }
    max = Math.max(max, right - left + 1)
  }

  return max
};
// @lc code=end

// console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2))
// console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3))
console.log(longestOnes([0,0,1,1,1,0,0], 0))