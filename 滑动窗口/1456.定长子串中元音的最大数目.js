/*
 * @lc app=leetcode.cn id=1456 lang=javascript
 *
 * [1456] 定长子串中元音的最大数目
 */

// @lc code=start

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
  const yuan = ['a', 'e', 'i', 'o', 'u']
  const arr = new Set(yuan.concat(yuan.map(v => v.toLocaleUpperCase())))
  let count = 0
  let max = 0
  let i = 0, j = k - 1
  while(i <= j) {
    if(arr.has(s[i])) {
      count ++
    }
    i ++
  }
  max = count
  // i这个时候在j的下一个，窗口继续，窗口可以这样表示：【i - k + 1， i】
  while(i < s.length) {
    // 注意这里是i - k，之前写成i - k - 1了，左边指针就找错了
    if(arr.has(s[i - k])) {
      count --
    }
    if(arr.has(s[i])) {
      count ++
    }
    i ++
    max = Math.max(count, max)
  }
  return max
};
// @lc code=end

console.log(maxVowels("aeiou", 2))