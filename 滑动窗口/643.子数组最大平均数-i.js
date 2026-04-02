/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 */

// @lc code=start
/**
 * 最开始看到这个题，因为是滑动窗口的题，自己还想复杂了，其实就是简单的滑动窗口哈哈哈哈
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  // 先算出前k个的和
  let left = 0, right = k - 1
  let sum = 0
  for(let i = left; i <= right; i ++) {
    sum = sum + nums[i]
  }
  // 保存最大数
  let max = sum
  left ++
  right ++
  // 移动窗口继续查找
  while(right < nums.length) {
    // 这样算可以避免中间已经求和的数反复求和
    sum = sum - nums[left - 1] + nums[right]
    max = Math.max(max, sum)
    left ++
    right ++
  }

  // 最后再算平均数
  return max / k
};
// @lc code=end
console.log(findMaxAverage([1,12,-5,-6,50,3], 4))
