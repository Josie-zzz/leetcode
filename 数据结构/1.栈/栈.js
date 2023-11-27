/**
 * 实现数据结构 -- 栈
 * 这里使用数组这种数据结构来保存栈里的元素
 * 大部分方法的时间复杂度为 O(n)
 */
class Stack {
    constructor() {
        this.items = []
    }
    // 实现一些方法操作数组

    // 添加元素到栈中
    push(...vals) {
        this.items.push(...vals)
    }

    // 从栈顶移除元素，并返回移除的元素
    pop() {
        return this.items.pop()
    }

    // 返回栈顶元素【并不是移除】
    peek() {
        return this.items[this.items.length - 1]
    }

    // 判断栈里元素是否为空
    isEmpty() {
        return this.items.length === 0
    }

    // 移除栈内所有元素
    clear() {
        this.items = []
    }

    // 返回栈内元素个数
    size() {
        return this.items.length
    }
 }

let arr = new Stack()
arr.push(1,2,3,4,5)
console.log(arr, arr.peek(), arr.isEmpty(), arr.pop())


/**
 * 使用对象实现栈这种结构
 * 实现的方法的时间复杂度都为 O(1)
 */

class StackObj {
    constructor() {
        this.items = {}
        this.count = 0
    }
    // 实现一些方法操作数组

    // 添加元素到栈中
    push(...vals) {
        for(const val of vals) {
            this.items[this.count] = val
            this.count ++
        }
    }

    // 从栈顶移除元素，并返回移除的元素
    pop() {
        if(this.isEmpty()) {
            return
        }
        const val = this.items[this.count - 1]
        delete this.items[this.count - 1]
        this.count --
        return val
    }

    // 返回栈顶元素【并不是移除】
    peek() {
        if(this.isEmpty()) {
            return
        }
        return this.items[this.count - 1]
    }

    // 判断栈里元素是否为空
    isEmpty() {
        return this.count === 0
    }

    // 移除栈内所有元素
    clear() {
        this.items = {}
        this.count = 0
    }

    // 返回栈内元素个数
    size() {
        return this.count
    }
}

let arrObj = new StackObj()
arrObj.push(1,2,3,4,5)
console.log('arr2', arrObj.size(), arrObj.peek(), arrObj.pop(), arrObj.isEmpty(), arrObj)