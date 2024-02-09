/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 * 这道题很简单，其实就是遍历数组然后判断是否要合并而已
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const result = []
    // 初始值从第一项开始
    let start = nums[0]
    let end = nums[0]
    // 之所以判断等于，是因为还有最后一组
    for(let i = 1; i <= nums.length; i++) {
        // 如果等于就继续增加
        if(end + 1 === nums[i]) {
            end = nums[i]
        } else {
            // 否则就组合一下压入栈中
            if(start === end) {
                result.push(`${start}`)
            } else {
                result.push(`${start}->${end}`)
            }
            start = nums[i]
            end = nums[i]
        }
    }
    return result
};
// @lc code=end

