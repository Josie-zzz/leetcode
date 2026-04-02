/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 * 增加一个辅助栈，记录每次push时的最小值，还是参考了题解，之前写的有点问题
 */

// @lc code=start

var MinStack = function() {
    this.stack = []
    this.minStack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)
    const len = this.minStack.length
    const last = len ? this.minStack[len - 1] : Infinity
    // 每次压入栈的都是基于已有数的最小值，如果以后再看不明白就看题解的动画，很清晰
    this.minStack.push(Math.min(val, last))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.minStack.pop()
    return this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

const stack = new MinStack()
stack.push(-2)
stack.push(0)
stack.push(-3)
console.log(stack.getMin())
stack.pop()
stack.pop()
console.log(stack.getMin())