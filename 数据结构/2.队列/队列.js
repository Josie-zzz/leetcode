/**
 * 其实和栈定义的类很相似，只是原则不同
 * 这里就不要像栈那样记录个数了，不适合队列，因为队列是只能从队头移除元素
 */
class Queue {
    constructor() {
        this.item = {}
        // 记录队头
        this.start = 0
        // 记录队尾
        this.end = 0
    }

    // 队尾添加一个/多个元素
    enqueue(...vals) {
        for(let val of vals) {
            this.item[this.end] = val
            this.end ++
        }
    }

    // 移除对头一个元素
    dequeue() {
        if(this.isEmpty()) {
            return
        }
        const val = this.item[this.start]
        delete this.item[this.start]
        this.start ++
        return val
    }

    // 返回队头的一个元素
    peek() {
        if(this.isEmpty()) {
            return
        }
        return this.item[this.start]
    }

    // 队列是否为空
    isEmpty() {
        return this.end - this.start === 0
    }

    // 队中元素个数
    size() {
        return this.end - this.start
    }

    // 清空
    clear() {
        this.item = {}
        this.start = 0
        this.end = 0
    }
}

const queue = new Queue()
queue.enqueue(12,24,56,34,67)
console.log(queue.size(), queue.dequeue(), queue.dequeue(), queue.peek(), queue.peek(), queue.size())

module.exports = {
    Queue
}