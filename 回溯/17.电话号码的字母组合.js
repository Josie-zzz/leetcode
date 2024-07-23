/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

const map = new Map([
    ['1', ''],
    ['2', 'abc'],
    ['3', 'def'],
    ['4', 'ghi'],
    ['5', 'jkl'],
    ['6', 'mno'],
    ['7', 'pqrs'],
    ['8', 'tuv'],
    ['9', 'wxyz'],
])

// '345'

// @lc code=start
/**
 * 和全排列几乎类似的做法，回溯
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const stack = []
    const result = []

    const backTrack = (idx) => {
        // 结束条件
        if(idx === digits.length) {
            // 应对空串和1的情况
            if(stack.length) {
                result.push(stack.join(''))
            }
            return
        }
        // 取出当前位置的可能
        const str = map.get(digits[idx])
        if(str) {
            for(let i = 0; i < str.length; i++) {
                // 压入栈
                stack.push(str[i])
                backTrack(idx + 1)
                // 回退
                stack.pop()
            }
        } else {
            // 主要是应对1的情况
            backTrack(idx + 1)
        }
    }

    backTrack(0)

    return result
};
// @lc code=end

console.log(letterCombinations('23'))
console.log(letterCombinations(''))
console.log(letterCombinations('2'))