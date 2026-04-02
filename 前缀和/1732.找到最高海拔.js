/*
 * @lc app=leetcode.cn id=1732 lang=javascript
 *
 * [1732] 找到最高海拔
 */

// @lc code=start
/**
 * 这个题我读了半天都没理明白，题目说的不太清楚。。
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let max = 0
    let i = 0
    let sum = 0
    while(i < gain.length) {
        sum = sum + gain[i]
        max = Math.max(max, sum)
        i ++
    }
    return max
};
// @lc code=end

console.log(largestAltitude([-5,1,5,0,-7]))