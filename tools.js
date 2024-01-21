// 各种工具函数，做算法用的

// 根据数据生成链表
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}

function getLinkList (arr) {
    let linkList = null
    let last = null
    arr.forEach(v => {
        const node = new ListNode(v)
        if(!linkList) {
            linkList = node
        } else {
            last.next = node
        }
        last = node
    })
    return linkList
}


module.exports = {
    getLinkList
}