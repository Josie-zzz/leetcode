/*
 * @lc app=leetcode.cn id=1071 lang=javascript
 *
 * [1071] 字符串的最大公因子
 */

// @lc code=start
/**
 * 穷举法，列举所有可能性来判断
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  let result = str1.length < str2.length ? str1 : str2
  while(result.length) {
    if(compare(result, str1) && compare(result, str2)) {
      return result
    }
    result = result.slice(0, -1)
  }
  return ''
};

const compare  = (a, b) => {
  if(a.length > b.length) {
    return false
  }
  while(b.length) {
    const str = b.slice(0, a.length)
    if(a !== str) {
      return false
    }
    b = b.slice(a.length)
  }
  return true
}

// debugger
// console.log(gcdOfStrings("ABCABC", "ABC"))
// console.log(gcdOfStrings("ABABAB", "ABAB"))
console.log(gcdOfStrings("LEET", "CODE"))
// console.log(gcdOfStrings("AAAAAB", "AAA"))
// @lc code=end

