/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// 判断是否匹配字符
const matchChat = (c) => {
    const match = c.match(/[a-zA-Z0-9]/)
    return match !== null
}

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let start = 0
    let end = s.length - 1
    while(start <= end) {
        // 如果是空格就跳过
        if(!matchChat(s[start])) {
            start++
            continue
        }
        if(!matchChat(s[end])) {
            end --
            continue
        }
        // 转换小写比较
        const newStart = s[start].toLocaleLowerCase()
        const newEnd = s[end].toLocaleLowerCase()
        if(newStart !== newEnd) {
            return false
        }
        start++
        end--
    }
    return true
};
// @lc code=end

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome(" "))