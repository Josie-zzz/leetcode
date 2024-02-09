/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * 其实如果光看到题目我是没有思路的，但是因为他是栈的题目，所以要用栈解决，我就在纸上写了写，不知道是惯性思维还是什么，很快就写出来了
 * 逆波兰式：称为后缀表达式，我们常用的是中缀表达式。为啥会有后缀表达式的存在呢？原因就在于这个简单是相对人类的思维结构来说的，对计算机而言中序表达式是非常复杂的结构。相对的，逆波兰式在计算机看来却是比较简单易懂的结构。
 * 中缀表达式：(a * b) - c 相对应的后缀表达式就是：ab*c-   eg: (a+b)*c-(a+b)/e -> ab+c*ab+e/-
 * 思路：
 * 利用栈的先进后出原则，遍历数组，如果是运算符就从栈中弹出两个值并计算，计算完后将结果再压入栈中
 * 如果是正常的数值就压入栈等待被计算
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = []
    const sign = ['+', '-', '*', '/']
    for(let i = 0; i < tokens.length; i ++) {
        if(sign.includes(tokens[i])) {
            // 弹出两个数，注意顺序，先弹出的被运算
            const num2 = stack.pop()
            const num1 = stack.pop()
            // 因为数组中都是字符串，包括运算符也是，所以利用 eval 执行字符串的代码
            // 注意第二个数要有括号，因为可能会是负数
            // 看题解没有人用 eval，他们是用 Switch 分情况计算的
            let value = eval(`${num1}${tokens[i]}(${num2})`)
            // 因为题目中有除法向零去整的要求
            if(tokens[i] === '/') {
                value = Math.trunc(value) // 丢弃掉小数部分
            }
            stack.push(value)
        } else {
            stack.push(tokens[i])
        }
    }
    return stack[0]
};
// @lc code=end

// console.log(evalRPN(["4","13","5","/","+"]))
console.log(evalRPN(["4","-2","/","2","-3","-","-"]))