/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 设置一个找不到零的情况
const notAmount = Infinity
var coinChange = function(coins, amount) {
    if(!amount) {
        return 0
    }
    const dp = (price) => {
        // 如果数组存在找零，就返回1，因为只需要一张就行了
        if(coins.includes(price)) {
            return 1
        }

        if(coins.every((c) => price < c)) {
            return notAmount
        }
        // 初始值设置一个很大的数就行，啥都可以
        let min = notAmount
        // 遍历零钱，尝试减去零钱后面每个金额的情况
        for(let i = 0; i < coins.length; i++) {
            const result = dp(price - coins[i])
            if(result !== notAmount) {
                // 取最小，然后结果别忘了加 1
                min = Math.min(min, result + 1)
            }
        }
        return min
    }
    const result = dp(amount)
    if(result === notAmount) {
        return -1
    }
    return result
};
// @lc code=end

// 当然了，上面也是会存在金额重复计算的问题
coinChange = function(coins, amount) {
    if(!amount) {
        return 0
    }
    // 缓存计算过的值
    const map = new Map()
    const dp = (price) => {
        // 如果计算过，直接返回
        if(map.has(price)) {
            return map.get(price)
        }
        // 如果数组存在找零，就返回1，因为只需要一张就行了
        if(coins.includes(price)) {
            return 1
        }
        // 如果当前金额小于所有可以找零的金额，说明没办法找零，返回一个特殊值就行
        if(coins.every((c) => price < c)) {
            return notAmount
        }
        // 初始值设置一个很大的数就行，啥都可以
        let min = notAmount
        // 遍历零钱，尝试减去零钱后面每个金额的情况
        for(let i = 0; i < coins.length; i++) {
            const result = dp(price - coins[i])
            if(result !== notAmount) {
                // 取最小，然后结果别忘了加 1
                min = Math.min(min, result + 1)
            }
        }
        // 如果可以找零的就缓存起来
        if(min !== notAmount) {
            map.set(price, min)
        }
        console.log(min)
        return min
    }
    const result = dp(amount)
    if(result === notAmount) {
        return -1
    }
    console.log(map, map.size)
    return result
};

console.log(coinChange([8,10,5], 40))
// console.log(coinChange([186,419,83,408], 1096 * 2))