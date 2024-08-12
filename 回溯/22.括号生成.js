/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * 这里回溯部分是指每一个位置对于左括号还是右括号做一个选择，
 * 这里有个条件是有效括号，所以对于括号要校验，也是回溯条件之一
 * 时间复杂度是 O(2^2n * n)
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = []
    const stack = []
    // 括号使用计数
    const map = new Map([
        ['(', 0],
        [')', 0],
    ])
    // 括号种类，用于遍历做选择
    const kuohao = [...map.keys()]
    const baclTrack = (count, verify = 0) => {
        // 校验不是有效括号直接返回
        if(verify < 0) {
            return
        }
        // 如果有效括号并且到了最后一层就push
        if(count === 0) {
            result.push(stack.join(''))
            return
        }
        // 每层做选择
        for(let i = 0; i < kuohao.length; i ++) {
            const str = kuohao[i]
            // 如果数量满了，就选择下一个括号
            if(map.get(str) === n) {
                continue
            }
            // 入栈
            stack.push(str)
            // 计数，加一
            map.set(str, map.get(str) + 1)

            // 校验用的，遇到左括号就加一，遇到右括号就减一，如果是负数说明不合法
            let newVerify = verify
            if(str === '(') {
                newVerify ++
            } else {
                newVerify --
            }

            // 继续递归做选择
            baclTrack(count - 1, newVerify)
            
            // 回退，计数-1
            map.set(str, map.get(str) - 1)
            stack.pop()
        }
    }
    baclTrack(n * 2)
    return result
};
// @lc code=end

console.log(generateParenthesis(3))