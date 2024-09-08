/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 * LRU是Least Recently Used的缩写，即最近最少使用，是一种常用的页面置换算法，选择最近最久未使用的页面予以淘汰。
 */

// 节点类
const LinkNode = function(key, val) {
    this.key = key
    this.val = val
    this.next = null
    this.prev = null
}

// @lc code=start
/**
 * 首先明白这个题是啥意思，他其实和后台应用很像，最近最先使用的放在前面，不常使用的如果容量不够就清掉
 * 因为涉及到头部加入，尾部删除，所以需要一个双向链表
 * 因为需要操作的复杂度为O(1)，并且快速方便获取，所以需要 hash map。
 * @param {number} capacity 容量大小
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    // 记录当前的长度
    this.length = 0
    this.head = null
    this.tail = null
    // 存储关键字对应的节点，方便快速找到节点，刚好题目要求时间复杂度为 O(1)
    this.cache = new Map()
};

/** 
 * 获得这个节点，并将其移到头节点
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const node = this.cache.get(key)
    if(node) {
        // 如果不是头节点就需要移动位置，如果是头节点就不需要动
        if(node.prev) {
            // 改变 node 前一个节点的指针
            node.prev.next = node.next
            // 操作 node 后一个节点：如果 node 后右节点 说明动的不是最后一个节点，如果没有说明动的是最后一个节点
            if(node.next) {
                node.next.prev = node.prev
            } else {
                this.tail = node.prev
            }
            // 将 node 移到头部
            node.next = this.head
            this.head.prev = node
            node.prev = null
            this.head = node
        }
        
        return node.val
    } else {
        return -1
    }
};

/** 
 * 加入一个新的节点，如果容量不够淘汰末尾节点
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // 判断缓存中是否存在这个 key，存在的话就修改值，否则就新增
    const findNode = this.cache.get(key)
    if (findNode) {
        findNode.val = value
        // 别忘了修改完挪位置
        this.get(key)
        return
    }

    // 向头部插入一个节点
    const node = new LinkNode(key, value)
    node.next = this.head
    if(this.head) {
        this.head.prev = node
    }
    this.head = node
    if(!this.tail) {
        this.tail = node
    }
    this.cache.set(key, node)
    this.length ++

    // 判断容量，是否需要淘汰末尾节点
    if(this.length > this.capacity) {
        // 删除后要请调缓存
        this.cache.delete(this.tail.key)
        this.tail = this.tail.prev
        this.tail.next = null
        this.length --
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

const lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4