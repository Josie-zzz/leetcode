/*
 * @lc app=leetcode.cn id=334 lang=javascript
 *
 * [334] 递增的三元子序列
 */

// @lc code=start
/**
 * 暴力解法，极端case会超时，想不出最优解
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  for(let i = 0; i < nums.length; i ++){
    let a = nums[i]
    for(let j = i + 1; j < nums.length; j ++){
      if(nums[j] <= a) continue
      let b = nums[j]
      for(let k = j + 1; k < nums.length; k ++){
        if(nums[k] > b) {
          return true
        }
      }
    }
  }
  return false
};
// @lc code=end

/**
 * 看了题解的思路，一下就get到了
 * 他的意思是维护两个数组，一个数组保存当前位置 i 左边最小的数，一个数组保存右边最小的数
 * 还有一个双指针的谈心算法，大概看懂了，但是我的脑子不太能消化，所以放弃记录
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet2 = function(nums) {
  const a = []
  const b = []
  let left = Infinity
  for(let i = 1; i < nums.length - 1; i ++){
    a[i] = Math.min(left, nums[i - 1])
    left = a[i]
  }
  let right = -Infinity
  for(let i = nums.length - 2; i > 0; i --){
    b[i] = Math.max(right, nums[i + 1])
    right = b[i]
  }
  return nums.some((v, i) => v > a[i] && v < b[i])
};

console.log(increasingTriplet2([1,2,3,4,5]), 'increasingTriplet2')
console.log(increasingTriplet2([5,4,3,2,1]), 'increasingTriplet2')
console.log(increasingTriplet2([2,1,5,0,4,6]), 'increasingTriplet2')