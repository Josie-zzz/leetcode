/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 颠倒字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const arr = []
    let str = ''
    for(let i = 0; i < s.length; i++) {
        if(s[i] !== ' ') {
            str = str + s[i]
        } else {
            if(str) {
                arr.unshift(str)
                str = ''
            }
        }
    }
    if(str) {
        arr.unshift(str)
    }
    return arr.join(' ')
};


/**
 * 纯字符串拼接来做的
 * 2026.3.26
 * @param {string} s
 * @return {string}
 */
var reverseWords2 = function(s) {
    let str = ''
    let p = 0
    let p2 = 0
    while(p < s.length) {
      if(s[p] == ' ') {
        p ++ 
        continue
      }
      p2 = p
      while(s[p2 + 1] != ' ' && p2 < s.length) {
        p2 ++
      }
      const t = s.slice(p, p2 + 1)
      str = t + (str ? (' ' + str) : str)
      p = p2 + 1
    }
    return str
};
// @lc code=end

reverseWords("the sky is blue")
console.log(reverseWords2("  hello world  "))