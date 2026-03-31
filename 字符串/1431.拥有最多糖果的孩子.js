/*
 * @lc app=leetcode.cn id=1431 lang=javascript
 *
 * [1431] 拥有最多糖果的孩子
 */

// @lc code=start
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = 0
    for(let i = 0; i < candies.length; i ++) {
      max = Math.max(max, candies[i])
    }

    const arr = []
    for(let i = 0; i < candies.length; i ++) {
      if((extraCandies + candies[i]) >= max) {
        arr[i] = true
      } else {
        arr[i] = false
      }
    }
    return arr
};
// @lc code=end

