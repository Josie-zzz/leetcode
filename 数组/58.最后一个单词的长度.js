/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * 遍历就完事了，时间复杂度O(n)
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let end = -1
    for(let i = s.length - 1; i >= 0; i --) {
        // 注意是空格不是空串，这个位置无非就两个情况，空格和非空格
        if(s[i] !== ' ') {
            // 如果end位置没有赋值就赋值
            if(end === -1) {
                end = i
            }
        } else {
            // 如果是空格需要判断end的值，如果被赋值了说明刚好就是一个完整单词
            if(end !== -1) {
                return end - i
            }
        }
    }
    // 注意结束时候也要判断，有可能没碰到空格就结束了，注意这里使整个字符串，索引记得加1
    if(end !== -1) {
        return end + 1
    }
    // 实在没有就是0
    return 0
};
// @lc code=end
console.log(lengthOfLastWord('Hello World'))
console.log(lengthOfLastWord(' moon '))
console.log(lengthOfLastWord('luffy is still joyboy'))
