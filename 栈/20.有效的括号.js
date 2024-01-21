/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// 右边对应的左边
const rightMapLeft = new Map([
    [')', '('],
    [']', '['],
    ['}', '{'],
])

// 左边对应右边
const leftMapRight = new Map()
leftMapRight.set('(', ')')
leftMapRight.set('[', ']')
leftMapRight.set('{', '}')

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
    if(s.length) {
        for (let i = 0; i < s.length; i++) {
            // 如果是左边符号，压入栈中
            if(leftMapRight.has(s[i])) {
                stack.push(s[i])
                continue
            }
            // 如果是右边符号，就出栈比较
            if(rightMapLeft.has(s[i])) {
                const value = stack.pop()
                // 匹配就继续，不匹配直接返回 false
                if(rightMapLeft.get(s[i]) === value) {
                    continue
                } else {
                    return false
                }
            }
        }
    }
    // 遍历完了，栈内还有，说明没有成对匹配
    if(stack.length) {
        return false
    }
    return true
};
// @lc code=end
isValid('(]')
