/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 * 除了 getMin 其他和栈的普通实现是几乎一样的，题目要求在常数时间内检索到最小元素的栈。
 * 所以就需要增加一个辅助栈，这个辅助栈就保存每次压入栈内后的最小值。
 * 每次 pop 出栈的时候，如果等于最小值，辅助栈也需要 pop。否则辅助站不需要动
 */

// @lc code=start

var MinStack = function() {
    this.stack = []
    this.minStack = []
    this.length = 0
    this.minLength = 0
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)
    // 如果栈没值 或者 当前值小于等于最小栈栈顶的值【注意等于也要压入栈中】，就压入
    if(!this.length || val <= this.minStack[this.minLength - 1]) {
        this.minStack.push(val)
        this.minLength ++
    }

    this.length ++
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const value = this.stack.pop()
    this.length --
    // 如果弹出的值等于最小栈栈顶的值，就一起被弹出去
    if(this.minStack[this.minLength - 1] === value) {
        this.minStack.pop()
        this.minLength --
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minLength - 1]
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
stack.getMin()
stack.pop()
stack.pop()
stack.getMin()