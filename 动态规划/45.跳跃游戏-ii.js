/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * 动态规划
 * 在做55题跳跃游戏1的时候用动归的思想去做超时了，但是这个题要求最小跳跃次数，这种最值题还是得动归，因为只有穷举了，才能找到最值。。
 * 从后往前，以此记录每个位置的最小步数，从而推导出第一个位置的最小步数
 * 对于第i个位置来说，它到 i + 1 ~ i + nums[i] 的步数都是 1，所以他到终点的最小步数取决于这个区间内是否存在最小步数。
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    // 初始化，都设置 -1 说明无效步数
    const jumps = new Array(nums.length).fill(-1)
    jumps[nums.length - 1] = 0
    // 最后一个索引
    const lastIndex = nums.length -  1
    // 随便写一个最大值常量，用于比较
    const maxNum = nums.length + 1
    for(let i = lastIndex - 1; i >= 0; i --) {
        let min = maxNum
        let count = i + 1
        // 找到 i + 1 ~ i + nums[i] 这个区间内最小的步数，然后 + 1 就是当前索引的最小步数
        while(count <= i + nums[i] && count < nums.length) {
            // 注意是不为 -1 的时候
            if(jumps[count] !== -1) {
                min = Math.min(jumps[count], min)
            }
            count++
        }
        // 记录当前位置的最小步数
        jumps[i] = min !== maxNum ? min + 1 : -1
    }
    return jumps[0]
};
// @lc code=end
// console.log(jump([2,3,1,1,4]))

/**
 * 看了下题解，好像还是贪心算法时间复杂度更低，更合适一点
 * 其实思路和跳跃游戏一样的，不同点在于每次扩大一次边界就 +1 ，通过局部最优解获得全局最优解
 * 没写出来，总有问题。。。。。
 * @param {number[]} nums
 * @return {number}
 */
// jump = function(nums) {
//     let index = 0
//     // 当前最大边界
//     let maxArea = nums[index] + index
//     // 下一次的最大边界
//     let nextArea = maxArea
//     let step = 0
//     while(index <= nums.length - 1) {
//         // 记录新的可能的最大边界
//         nextArea = Math.max(nextArea, nums[index] + index)
//         index ++ 
//         // 到当前边界时，到达边界时重置，并记录一次步数
//         if(index === maxArea || index === nums.length - 1) {
//             step ++
//             maxArea = nextArea
//         }
//     }
//     return step
// }
// console.log(jump([2,1]))
// console.log(jump([2,3,1,1,4]))
// console.log(jump([1]))
