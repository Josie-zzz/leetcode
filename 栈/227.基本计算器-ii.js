/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * 崩溃了，做了两个小时没做出来。。。。。总是有bug。。。
 * 第二天看了解析继续做 ☺️
 * 思路：当遇到 + - 的时候就把数字推入栈，遇到 * 和 / 就pop栈顶出来进行计算，然后再压入栈，因为乘除优先级高，需要先计算完成
 * 这里的细节就是，每次遇到数字在进行操作，每次保存前一个操作符，根据前一个操作符判断当前字符串何去何从。
 * 这样就不会混乱，之前知道这个思路，但是没捋清楚写半天老是有问题。
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  // 保存前一个操作符
  let oper = ''
  // 保存数字栈
  const stack = []
  let i = 0
  while(i < s.length) {
    // 略过空串
    if(s[i] === ' ') {
      i++
      continue
    }
    // 遇到数字在操作
    if(isNumber(s[i])) {
      let str = s[i]
      // 因为可能是多个连续的数字
      while(isNumber(s[i + 1])) {
        i ++
        str = str + s[i]
      }

      // 遇到数字就进行操作，如果是 + 和 - 就推入栈，否则就是和栈顶进行计算
      switch(oper) {
        case '':
        case '+': stack.push(Number(str));break
        case '-': stack.push(- Number(str)); break
        case '*': stack.push(stack.pop() * Number(str)); break
        // 这里用了Math.trunc，去掉小数点后面的数值，之前用了floor，针对负数就会向上取整，结果跑case有问题。。。
        case '/': stack.push(Math.trunc(stack.pop() / Number(str))); break
      }
    } else {
      oper = s[i]
    }
    i ++
  }

  // 所有数字之和
  return stack.reduce((a, b) => a + b)
};

const isNumber = (a) => {
  return !isNaN(Number(a))
}

// @lc code=end

// console.log(calculate("3+2*2"))
// console.log(calculate(" 3/2 "))
// console.log(calculate(" 3+5 / 2 "))
// console.log(calculate('0'))
// console.log(calculate("2*3+4"))
// console.log(calculate("20*30+45"))
console.log(calculate("14-3/2"))