/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // 代表索引位置
    let p1 = 1
    // 找到最近一个不等于 val 的数放在p1
    let p2 = 1
    let repeatNum = nums[0]
    let repeat = 1
    while(p2 < nums.length) {
        // 等于的话就记录，不等于就重置
        if(nums[p2] === repeatNum) {
            repeat ++
        } else {
            repeatNum = nums[p2]
            repeat = 1
        }
        // 如果小于等于 2，就赋值
        if (repeat <= 2) {
            nums[p1] = nums[p2]
            p1 ++
        }
        // 不管如何都需要 ++
        p2 ++
    }

    return p1
};
// @lc code=end

