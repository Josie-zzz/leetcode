/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * 二分法，题目要求时间复杂度了，每次去中间的数判断，是否可能是峰值
 * 用递归，找到一个就停止查找，所以有一些判断条件
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let result
    const findNum = (l, r) => {
        // 如果有结果，或者越界就停止
        if(result || l > r) {
            return
        }
        const mIndex = Math.floor((l + r) / 2)
        // 判断是否是目标值
        if((nums[mIndex + 1] || -Infinity) < nums[mIndex] && (nums[mIndex - 1] || -Infinity) < nums[mIndex]) {
            result = mIndex
            return
        }
        // 探索左边和右边
        findNum(mIndex + 1, r)
        findNum(l, mIndex - 1)
    }
    findNum(0, nums.length - 1)
    return result
};
// @lc code=end
// console.log(findPeakElement([1,2,3,1]))
// console.log(findPeakElement([1,2,1,3,5,6,4]))
console.log(findPeakElement([3,2,1]))
