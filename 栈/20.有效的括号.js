/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
// 右边对应的左边
const map = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
])
// 右边的括号
const right = Array.from(map.values())

// @lc code=start
/**
 * 这是利用栈来解决的问题
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = []
    let p = 0
    while (p < s.length) {
        // 如果是左边符号，压入栈中
        if (map.has(s[p])) {
            stack.push(s[p])
        }
        // 如果是右边符号，就出栈比较
        if (right.includes(s[p])) {
            const value = stack.pop()
            // 不匹配直接返回 false
            if (map.get(value) !== s[p]) {
                return false
            }
        }
        p ++
    }
    // 遍历完了，栈内还有，说明没有成对匹配
    if (stack.length) {
        return false
    }
    return true
};
// @lc code=end

console.log(isValid("()"))
console.log(isValid("([)]"))
console.log(isValid("()[]"))
console.log(isValid("([{}])"))