const { LinkNode, LinkedList } = require('./链表.js')

class DoublyNode extends LinkNode {
    constructor(value) {
        super(value)
        // 增加一个前驱节点
        this.prev = null
    }
}

class DoublyLinkedList extends LinkedList {
    constructor() {
        super()
        // 增加一个尾指针
        this.tail = null
    }

    // 添加元素
    push(...vals) {
        for(let val of vals) {
            const node = new DoublyNode(val)
            if(!this.head) {
                this.head = node
                this.tail = node
            } else {
                this.tail.next = node
                node.prev = this.tail
                this.tail = node
            }
            this.count ++
        }
    }

    // 在任何位置插入一个元素
    insert(element, index) {
        // 先判断是否越界
        if(index < 0 || index > this.count) {
            return
        }
        const node = new DoublyNode(element)
        if(index === 0) {
            // 插入头
            if (!this.head) {
                this.push(element)
            } else {
                node.next = this.head
                this.head.prev = node
                this.head = node
            }            
        } else if (index === this.count) {
            // 插入尾端
            this.push(element)
        } else {
            // 插入中间
            // 找到 index 的位置（也可以想普通链表一样找到前一个位置）
            let count = 0
            let p = this.head
            while(count < index) {
                p = p.next
                count ++
            }
            // 先把 node 连上，在断开原来的链接
            node.next = p
            node.prev = p.prev
            p.prev.next = node
            p.prev = node
        }
        this.count ++
    }

    // 从某个位置移除元素
    removeAt(index) {
        // 先判断是否越界
        if(index < 0 || index >= this.count) {
            return
        }
        let element
        if(index === 0) {
            element = this.head
            // 头指针向后移动，判断是否为空的情况
            this.head = this.head.next
            if(!this.head) {
                this.tail = null
            } else {
                this.head.prev = null
            }
        } else if (index === this.count - 1) {
            element = this.tail
            this.tail = this.tail.prev
            if(!this.tail) {
                this.head = null
            } else {
                this.tail.next = null
            }
        } else {
            // 找到 index 的位置
            let count = 0
            let p = this.head
            while(count < index) {
                p = p.next
                count ++
            }
            p.prev.next = p.next
            p.next.prev = p.prev
        }
        this.count --
        return element
    }
}

console.log('-----')
const link = new DoublyLinkedList()
link.push(9,5,10)
link.insert(1, 0)
console.log(link.toArray())
link.insert(99, 2)
console.log(link.toArray())
// debugger
console.log(link)
