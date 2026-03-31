/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let count = 0
  for(let i = 0; i < flowerbed.length; i ++) {
    if(flowerbed[i] === 1) {
      continue
    } else {
      // 左边是0或者边界 并且右边是0或者边界
      if(
        (flowerbed[i - 1] === 0 || i - 1 === -1) && 
        (flowerbed[i + 1] === 0 || i + 1 === flowerbed.length)
      ) {
        count ++
        flowerbed[i] = 1
      }
    }
  }
  return n <= count
};
// @lc code=end
console.log(canPlaceFlowers([0,0,1,0,0,1,0,0], 2))
console.log(canPlaceFlowers([0,1,0,0,1,0], 1))
console.log(canPlaceFlowers([0], 1))
