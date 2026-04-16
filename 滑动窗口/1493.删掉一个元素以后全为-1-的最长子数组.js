/*
 * @lc app=leetcode.cn id=1493 lang=javascript
 *
 * [1493] 删掉一个元素以后全为 1 的最长子数组
 */

// @lc code=start
/**
 * 之前做过一个类似的题，所以这次处理的还行，但说实话知道怎么滑动窗口，但是边界条件处理起来还是不容易的。。。
 * 
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    // 保存每次 0 的位置
    let zeroIndex = -1
    // 0的数量
    let zeroCount = 0
    // 左右指针，滑动窗口，从0开始，因为题目要求至少抽走一个值，不管是0还是1，取最长的
    let left = 0
    let right = 0
    // 最大值
    let max = 0

    while(right < nums.length) {
        // 如果是当前值是0的话，就需要操作
        if(nums[right] === 0) {
            // 如果没遇到过0的话就不操作，就记录下，因为可以容纳一个 0
            // 否则就操作，因为说明遇到第二个0了，那么就就把指针挪到上一个0的下一个，因为一定是1
            if(zeroCount === 0) {
                zeroCount ++
            } else {
                left = zeroIndex + 1
            }

            // 每次遇到0就记录
            zeroIndex = right
        }
        // 每一次指针变更都记录最大值，因为left - right会保证每次都是合法的
        max = Math.max(right - left, max)
        
        right ++
    }

    return max
};
// @lc code=end

console.log(longestSubarray([1,1,0,1]))

console.log(longestSubarray([0,1,1,1,0,1,1,0,1]))
console.log(longestSubarray([1,1,1]))