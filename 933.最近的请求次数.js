/*
 * @lc app=leetcode.cn id=933 lang=javascript
 *
 * [933] 最近的请求次数
 */

// @lc code=start

var RecentCounter = function() {
    this.arr = []
};

/** 
 * 我是倒序遍历的，题解是用队列解决，感觉都一样把，没必要在写别的方案了
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.arr.push(t)
    const range = [t - 3000, t]
    let count = 0
    const arr = this.arr
    for(let i = arr.length - 1; i >= 0; i --) {
        if(arr[i] >= range[0] && arr[i] <= range[1]) {
            count ++
        } else {
            break
        }
    }
    return count
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end

const ins = new RecentCounter()
console.log(ins.ping(1))
console.log(ins.ping(100))
console.log(ins.ping(3001))
console.log(ins.ping(3002))