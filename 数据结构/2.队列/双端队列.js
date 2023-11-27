const { Queue } = require('./队列.js')
/**
 * 双端队列其实就是：队头和队尾都可以新增和删除
 * 所以就在队列的基础上扩展俩方法得了，其他方法都一样
 */
class Deque extends Queue {
    constructor() {
        super()
    }

    // 从队头新增
    addFront(...vals) {
        // 如果刚好为空
        if(this.isEmpty()) {
            this.enqueue(...vals)
        } else {
            for(let val of vals) {
                this.start --
                this.item[this.start] = val
            }
        }
    }

    // 从队尾移除
    removeBack() {
        if(this.isEmpty()) {
            return
        }
        const val = this.item[this.end - 1]
        delete this.item[this.end - 1]
        this.end --
        return val
    }

    // 返回队尾一个元素
    peekBack() {
        return this.item[this.end - 1]
    }
}

const deque = new Deque()
deque.enqueue(23,34,56,78,34,56,768)
console.log(deque, deque.size())
deque.addFront(2,3,5)
console.log(deque, deque.size(), deque.peek(), deque.removeBack(), deque.peekBack())