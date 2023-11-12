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

var coinChange = function(coins, amount) {
    if(!amount) {
        return 0
    }
    // 缓存每个数的最小找零，避免重复计算
    const cache = []
    const findCoins = (value) => {
        // 试图寻找value的最小找零
        // 初始值重置为-1，意思是不可用现有金额刚好找零
        // 这个值要记录当前value，在这组面额中，最小的找零数
        let min = -1
        for (let i = 0; i < coins.length; i++) {
            // 用当前面额减去所有可以找零的面额
            const left = value - coins[i]
            // 如果大于0，那就继续找
            if(left > 0) {
                let next
                // 如果缓存有直接拿，没有就找left最小找零
                if(cache[left]) {
                    next = cache[left]
                } else {
                    next = findCoins(left)
                }
                // 找完一圈下来，如果有值的话，就和min对比，如果比min小，说明当前这条链路更合适
                if(next !== -1) {
                    const newMin = next + 1
                    if(min === -1 || newMin < min) {
                        min = newMin
                    }
                }
            }
            // 如果等于0，说明当前金额恰好找零，当然min就是1
            if(left == 0) {
                min = 1
            }
            // 如果是小于0，其实就是不能刚好找零，那就循环继续尝试查找
        }
        // 最后一圈下来，就找到了当前value的最小找零，返回并缓存
        cache[value] = min
        return min
    }

    return findCoins(amount)
};
// @lc code=end

// 返回数组版本
var coinChange2 = function(coins, amount) {
    if(!amount) {
        return 0
    }
    // 缓存每个数的最小找零 -- 一定要有缓存，否则会栈溢出超时
    const cache = []
    const findCoins = (value) => {
        // 试图寻找value的最小找零
        let min = []
        for (let i = 0; i < coins.length; i++) {
            const left = value - coins[i]
            if(left > 0) {
                let arr = []
                if(cache[left]) {
                    arr = cache[left]
                } else {
                    arr = findCoins(left)
                }

                if(arr.length) {
                    const newArr = arr.concat(coins[i])
                    if(!min.length || newArr.length < min.length) {
                        min = newArr
                    }
                }
            }
            if(left == 0) {
                min = [coins[i]]
            }
        }
        cache[value] = min
        return min
    }
    const final = findCoins(amount)
    return final.length ? final.length : -1
};

console.log(coinChange([1, 2, 5, 100], 1000))
console.log(coinChange2([1, 2, 5, 100], 1000))