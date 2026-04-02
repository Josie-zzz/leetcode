/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
/**
 * 因为知道用前缀和来做，就知道咋做了
 * 顺序遍历，每个位置保存前缀之和，倒序遍历每个位置保存前缀之和
 * 然后随便遍历一个数组，如果存在另一个数组相同位置的值相等，就说明这个位置的前缀和后缀是相等的
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const arr1 = []
    const arr2 = []

    let sum1 = 0
    for(let i = 0; i < nums.length; i ++) {
        arr1[i] = sum1
        sum1 = nums[i] + sum1
    }
    let sum2 = 0
    for(let i = nums.length - 1; i >= 0; i --) {
        arr2[i] = sum2
        sum2 = nums[i] + sum2
    }

    return arr1.findIndex((v, i) => arr2[i] === v)
};
// @lc code=end
console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
console.log(pivotIndex([1, 2, 3]))
console.log(pivotIndex([2, 1, -1]))
