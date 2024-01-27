/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 * 有点正则内味，假设格式都是正常的，k[encoded_string]解码后的字符串是encoded_string出现 k 次后的结果。
 * 感觉实现起来得好好理解下，因为有嵌套的括号，而且其实应该先算最内层的，所以这一点和栈有点像，用栈是比较合适的
 * 在一个就是每次到最内层时就要重置计数和字符串记录，其实可以从作用域的角度思考，貌似有点好理解了。
 * 然后识别到有括号就出栈
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 * case： ’yyy3[a2[c]]hhh‘
 */
var decodeString = function(s) {
    // 保存数字前面的字符串
    const preStrStack = []
    // 保存数字
    const numStack = []
    // 当前字符串
    let currentStr = ''
    // 当前数字
    let currentNum = 0

    // 四种情况四种处理方式
    for(let val of s) {
        // 如果是数字就继续遍历，得到最终的数字
        if(val >= '0' && val <= '9') {
            // 连续数字
            currentNum = currentNum * 10 + Number(val)
        } else if (val === '[') { // 如果是'['，就将数字和之前的字符串压入栈中，并且重新重置字符串和数字
            numStack.push(currentNum)
            preStrStack.push(currentStr)
            currentStr = ''
            currentNum = 0
        } else if (val === ']') { // 如果是']'，就出栈，得到重复次数与之前的字符串，计算并且拼接在一起
            const preStr = preStrStack.pop()
            let num = numStack.pop()
            currentStr = preStr + currentStr.repeat(num)
        } else { // 如果是字母就继续遍历增加
            currentStr = currentStr + val
        }
    }
    return currentStr
};
// @lc code=end

console.log(decodeString("10[leetcode]"))