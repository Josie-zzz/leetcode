/**
 * 需要定义一个 LinkNode 类
 */
class LinkNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

/**
 * 再就是定义一个链表类
 * 不管是啥样的添加和删除，都要考虑两种情况，是头节点和其他节点
 */
class LinkedList {
    constructor() {
        // 元素个数
        this.count = 0
        // 头指针
        this.head = null
    }
    // 实现操作方法

    // 在链表尾端加一个元素
    push(...vals){
        for(let val of vals) {
            const node = new LinkNode(val)
            if(!this.head) {
                this.head = node
            } else {
                let pointer = this.head
                while(pointer.next) {
                    pointer = pointer.next
                }
                pointer.next = node
            }
            this.count ++
        }
    }

    // 向特定位置加一个元素
    insert(val, index) {
        // 先判断是否越界
        // 这里等于this.count也可以增加，相当于加在最后一项
        if(index < 0 || index > this.count) {
            return undefined
        }
        const node = new LinkNode(val)
        if(index === 0) {
            if(this.head) {
                node.next = this.head
            }
            this.head = node
        } else {
            let count = 0
            let pointer = this.head
            // 寻找合适位置的前一个
            while(count < index - 1) {
                pointer = pointer.next
                count ++
            }
            node.next = pointer.next
            pointer.next = node
        }
        this.count ++
    }

    // 返回链表指定位置的元素
    getValueAt(index) {
        // 先判断是否越界
        if(index < 0 || index >= this.count) {
            return undefined
        }
        let count = 0
        let pointer = this.head
        while(count < index) {
            pointer = pointer.next
            // 小于 index 最后到一步+1后等于 index
            count ++
        }
        return pointer
    }

    // 移除一个元素
    remove(val) {
        let element
        if(val === this.head.value) {
            element = this.head
            this.head = this.head.next
            this.count --
        } else {
            let pointer = this.head
            while(pointer.next) {
                if(pointer.next.value === val) {
                    element = pointer.next
                    pointer.next = pointer.next.next
                    this.count --
                } else {
                    pointer = pointer.next
                }
            } 
        }
        return element
    }

    // 返回元素的位置，没有返回 -1，假设第一项是 0
    indexOf(val) {
        let pointer = this.head
        let count = 0
        let flag = false
        while(!flag && pointer) {
            if(pointer.value === val) {
                flag = true
            } else {
                pointer = pointer.next
                count ++
            }
        }
        if(flag) {
            return count
        }
        return -1
    }

    // 从特定位置移除一个元素，假设第一项是 0
    removeAt(index) {
        // 先判断是否越界
        if(index < 0 || index >= this.count) {
            return undefined
        }
        let element
        if(index === 0) {
            element = this.head
            this.head = this.head.next
        } else {
            let count = 0
            let pointer = this.head
            // 寻找合适位置的前一个
            while(count < index - 1) {
                pointer = pointer.next
                count ++
            }
            pointer.next = pointer.next.next
        }
        this.count --
        return element
    }

    // 是否为空
    isEmpty() {
        return this.count === 0
    }

    // 元素个数
    size() {
        return this.count
    }

    // 转换链表为一个数组，测试用
    toArray() {
        const arr = []
        let p = this.head
        while(p) {
            arr.push(p.value)
            p = p.next

        }
        return arr
    }
}

const link = new LinkedList()
link.push(1,2,3,4,5,6)
// debugger
console.log(link.getValueAt(0))
console.log(link.indexOf(6))
console.log(link.insert(99, 5), link.toArray())
console.log(link.size())
// console.log(link.remove(6), link.toArray())
console.log(link.removeAt(5), link.toArray())

module.exports = {
    LinkNode,
    LinkedList
}