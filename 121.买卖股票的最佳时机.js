/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * 计算从每天开始到后面的每天抛出，最大的利润
 * 时间复杂度为 O(n^2)，大部分案例都通过，但是数量大的数组会超时
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0
    for(let i = 0; i < prices.length - 1; i++) {
        for(let j = i + 1; j < prices.length; j++) {
            const num = prices[j] - prices[i]
            if(num > max) {
                max = num
            }
        }
    }
    return max
};

// 这样的时间复杂度为O(n)
maxProfit = function(prices) {
    let max = 0
    // dp 记录每个位置在后面的位置中的最大值
    let dp = []
    // 从后向前遍历，dp 记录当前到后面最大的值
    for(let i = prices.length - 1; i >= 0; i --) {
        // 如果 dp 有值并且上一次大于当前位置，那么当前位置的最大值就是上一个位置的，否则就是当前值
        if(dp[i + 1] && dp[i + 1] > prices[i]) {
            dp[i] = dp[i + 1]
        } else {
            dp[i] = prices[i]
        }
        // 然后利用最大值和当前值相减就能得到差值
        const num = (dp[i + 1] || 0) - prices[i]
        if(num > max) {
            max = num
        }
    }
    return max
};
// @lc code=end
console.log(maxProfit([7,1,5,3,6,4]))
