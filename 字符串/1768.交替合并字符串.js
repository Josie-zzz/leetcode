/*
 * @lc app=leetcode.cn id=1768 lang=javascript
 *
 * [1768] 交替合并字符串
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let p1 = 0
    let p2 = 0
    let str = ''
    while(p1 < word1.length || p2 < word2.length) {
        str = str + (word1[p1] || '')
        str = str + (word2[p2] || '')
        p1 ++ 
        p2 ++
    }
    return str
};
// @lc code=end

