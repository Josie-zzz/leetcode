/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * 这道题数组每个位置的含义是最大可挑距离，case：[2,3,1,1,4] 
 * 比如第一项是 2 ，他可以调1次或者2次。如果它跳 1 次，能不能跳到终点取决于index 为 1 的位置，如果跳 2 次，能不能跳到终点取决于index 为 2 的位置
 * 因为前面的索引依赖后面索引的值，所以数组就倒着计算每个位置都是否可以跳到终点。
 * 然后每一项就检查从当前位置index到 index + nums[index] 这个区间内是否存在能调到终点的位置，如果存在说明可以跳到终点
 * 因为每一项都要检查 num[i] 次所以超时了。。。
 * 这道题不适合用动态规划来做，因为数组中会存在特别大的数，这样会超时。。用贪心思维来做
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // 初始化
    const jumps = new Array(nums.length).fill(false)
    jumps[nums.length - 1] = true
    // 最后一个索引
    const lastIndex = nums.length -  1
    for(let i = lastIndex - 1; i >= 0; i --) {
        // 检查从当前位置的下一个开始是否存在一个可以跳过的位置
        let count = i
        let flag = false
        while(count <= i + nums[i]) {
            if(jumps[count]) {
                flag = true
            }
            count ++
        }
        jumps[i] = flag
    }
    return jumps[0]
};
// @lc code=end

/**
 * 贪心算法
 * 怎么说呢，如果没刷过题是真想不到这个方法，leetcode官方解释那个公式没太看懂，但是看case分析看明白了
 * 他的思路是：用一个值实时保存可以跳到的最大距离，如果存在一个最大距离超过终点的，就返回 true
 * [3,2,1,0,4] 比如这个case：当i == 1 时，最大距离是 3，所以 i ~ i + 3 这个区间都可以抵达。然后在这个区间内计算是否还存在更远的距离
 * 如果存在一个 x，说明 0 - x这段区域都可以抵达，就这么推演。。
 * 时间复杂度为 O(n)
 */
canJump = function(nums) {
    let maxIndex = nums[0]
    for(let i = 0; i <= maxIndex; i++) {
        // 如果有更远的就更新
        maxIndex = Math.max(maxIndex, i + nums[i])
        // 如果遍历过程中出现一个索引直接大于等于终点的，就返回true
        if(maxIndex >= nums.length - 1) {
            return true
        }
    }
    return false
}
// console.log(canJump([2,3,1,1,4]))
console.log(canJump([3,2,1,0,4]))