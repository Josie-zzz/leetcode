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
// @lc code=end

reverseWords("the sky is blue")