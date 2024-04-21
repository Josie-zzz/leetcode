/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * 按照动态规划的思路，先写一个穷举的
 * 其实无非就是走一步和走两步而已，那就分两种情况往下走，取最小的。
 * @param {number[]} cost
 * @return {number}
 */
// 执行次数，测试用
let _times = 0
var minCostClimbingStairs = function(cost) {
    const dp = (index) => {
        _times++
        if(index >= cost.length - 2) {
            return cost[index]
        }
        const min = Math.min(dp(index + 1), dp(index + 2))
        return min + cost[index]
    }
    return dp(0)
};
// @lc code=end
console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]))
console.log(_times, 'times')

// 执行次数，测试用
let _times2 = 0
// 其实画一个递归树就能发现有很多重复的 dp 计算，所以写一个缓存，记录计算过的最小值
minCostClimbingStairs = function(cost) {
    // 缓存计算过的值
    const map = new Map()
    const dp = (index) => {
        _times2++
        // 如果计算过就直接返回
        if(map.has(index)) {
            return map.get(index)
        }
        // 如果是倒数两个，就直接返回当前索引的价格
        if(index >= cost.length - 2) {
            return cost[index]
        }
        // 否则就分情况递归，然后比较
        const min = Math.min(dp(index + 1), dp(index + 2))
        const result = min + cost[index]
        map.set(index, result)
        return result
    }
    // 因为题目要求可以从台阶 0 或者 1 开始爬。。不过再算第二个的时候因为有缓存了所以并不会浪费很多时间复杂度
    const one = dp(0)
    const two = dp(1)
    return Math.min(one, two)
};
console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]))
console.log(minCostClimbingStairs([10,15,20]))
console.log(_times2, 'times')
