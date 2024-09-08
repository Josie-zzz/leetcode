/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 * LRU是Least Recently Used的缩写，即最近最少使用，是一种常用的页面置换算法，选择最近最久未使用的页面予以淘汰。
 */

// @lc code=start
/**
 * 首先明白这个题是啥意思，他其实和后台应用很像，最近最先使用的放在前面，不常使用的如果容量不够就清掉
 * 用 map 就可以实现，map 的添加顺序就是操作顺序
 * @param {number} capacity 容量大小
 */
var LRUCache = function(capacity) {
    this.map = new Map()
    this.capacity = capacity
};

/** 
 * 获得这个节点，并将其移到头节点
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    // 如果存在就获取，并删除，然后添加，就可以把最新值移到最后一个
    if(this.map.has(key)) {
        const value = this.map.get(key)
        this.map.delete(key)
        this.map.set(key, value)
        return value
    }
    return -1
};

/** 
 * 加入一个新的节点，如果容量不够淘汰末尾节点
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // put 总归是要添加的
    if(this.map.has(key)) {
        // 如果存在就删除，末尾在加回来
        this.map.delete(key)
    } else if(this.map.size === this.capacity) {
        // 如果容量满了，就删掉第一个
        const k = this.map.keys().next().value
        this.map.delete(k)
    }
    this.map.set(key, value)
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