/*
 * @lc app=leetcode.cn id=1004 lang=javascript
 *
 * [1004] 最大连续1的个数 III
 */

// @lc code=start
/**
 * 感觉自己真的是呆瓜，知道使用滑动窗口来做，也知道怎么滑，但是判断逻辑就是写的不对。。。。。
 * 看了下ai的解析，思路还是要转变下，我自己想肯定还是挺浪费时间的。。。
 * 思路：移动right指针，保证这个字符串内的0不超过k个就行了，如果超过了就挪动left指针。
 * 然后满足条件的情况都计算一次最大长度。
 * 这个算法确实很精简
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
  let left = 0
  let max = 0
  let count = 0
  // 遍历right 保证范围内的0不超过k个
  for(let right = 0; right < nums.length; right ++) {
    // 如果为0就计数
    if(nums[right] === 0) {
      count ++
    }
    // 如果大于了，就一直挪动left
    while(count > k) {
      if(nums[left] === 0) {
        count --
      }
      left ++
    }

    // 走到这里说明是符合要求的
    max = Math.max(right - left + 1, max)
  }

  return max
};
// @lc code=end

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2))
console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3))
console.log(longestOnes([0,0,1,1,1,0,0], 0))
console.log(longestOnes([0,0,1,0], 0))