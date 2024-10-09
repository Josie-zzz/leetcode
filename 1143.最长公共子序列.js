/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * 这个有点不是很好理解，两个字符串形成的二维表，每个位置存储最长的公共字符串
 * 对于位置 graph[i][j] 来说，如果对应的字符相等，则就等于 graph[i - 1][j - 1] + 1 ，这个 1 就对应当前相同的字符
 * 如果不相等就等于上面一个或者左边的最大值，相当于两个字符串分别去掉一个字符看哪个公共的最长
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  const graph = new Array(text1.length).fill([])
  for(let i = 0; i < text1.length; i++) {
    for(let j = 0; j < text2.length; j++) {
      if(text1[i] === text2[j]) {
        // 注意临界值
        graph[i][j] = ((i === 0 || j === 0) ? 0 : graph[i - 1][j - 1]) + 1
      } else {
        // 注意临界值
        const left = j === 0 ? 0 : graph[i][j - 1]
        const top = i === 0 ? 0 : graph[i - 1][j]
        graph[i][j] = Math.max(left, top)
      }
    }
  }
  debugger
  return graph[text1.length - 1][text2.length - 1]
};
// @lc code=end

console.log(longestCommonSubsequence("abcba", "abcbcba"))
