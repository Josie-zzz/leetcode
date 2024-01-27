/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 * 他的意思是，对于answer[i]来说下一个比它还高的温度出现在几天后
 */

// @lc code=start
/**
 * 先写一个暴力解法
 * 大部分测试用例通过，有一个贼大量的数据执行超时，所以看来得想其他办法
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const answer = []
    for(let i = 0; i < temperatures.length; i ++) {
        let day = 0
        // 标记当前计数是否可用
        let flag = false
        for(let j = i + 1; j < temperatures.length; j ++) {
            day ++ 
            // 如果有更大的温度标记并退出
            if(temperatures[j] > temperatures[i]) {
                flag = true
                break
            }
        }
        // 根据标记设置当前温度的答案
        if(flag) {
            answer.push(day)
        } else {
            answer.push(0)
        }
    }
    return answer
};
// @lc code=end

/**
 * 利用栈的方式解决 --- 确实蛮不好理解的，没想到可以用栈这样做，还是看了解答才能理解
 * 维持一个递减栈，始终保持栈顶是最小的
 * 如果当前元素比栈顶大，说明碰到了一个比自己大的温度，出栈并计算栈顶元素的天数，如果栈不为空的话继续出栈
 * 如果当前元素比栈顶小，就压入栈中，继续遍历，因为不确定后面有没有比当前值还大的数，等后面遇到了在计算。
 * 注意压入栈中的事下标，因为计算的时候直接用下标相减就可以，而且通过下标也能拿到元素
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures2 = function(temperatures) {
    //  初始化一个结果数组
    const result = new Array(temperatures.length).fill(0)
    // 设置一个栈
    const stack = []
    // 遍历数组
    for (let i = 0; i < temperatures.length; i ++) {
        // 如果栈内有值并且当前值大于栈顶元素，就出栈，并计算栈顶元素的最大温度
        // 注意是一个循环，因为是一个递减栈，依次出栈，判断当前的元素，是否是栈内元素的达最大温度
        while(stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const peekIdx = stack.pop()
            result[peekIdx] = i - peekIdx
        }
        // 当前的值是一定要压入栈的，因为只有继续遍历才能得到当前值的后面的最大问题
        stack.push(i)
    }
    // 到了最后，可能还有一些元素压入栈，没找到最大温度的，那就不用管，都是 0，而且前面已经初始化了
    return result
};

console.log(dailyTemperatures2([73,74,75,71,69,72,76,73]))