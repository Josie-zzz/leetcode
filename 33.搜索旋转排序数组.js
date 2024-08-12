/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * 其实就是用二分法，千万不要被旋转数组这个条件吓到了，其实如果反转后，整个数据也是还是递增和递增拼接的
 * 所以其实就是在简单的二分法中加一个判断条件，如果是旋转过的就两边都探索下，因为两边都有可能有目标值
 * 如果是正常数组就正常遍历
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // 默认是-1，没找到就返回这个
    let result = -1
    const binarySearch = (l, r) => {
        // 找到了或者超出边界了就停止
        if(result !== -1 || l > r) {
            return
        }
        const m = Math.floor((l + r) / 2)
        // 如果刚好是就保存并停止
        if(nums[m] === target) {
            result = m
            return
        }
        // 判断是否旋转过，其实很简单，就是判断右边值是否小于左边的
        const hasChange = nums[r] < nums[l]
        if(hasChange) {
            // 旋转过就两边都探索
            binarySearch(m + 1, r)
            binarySearch(l, m - 1)
        } else {
            // 否则分情况探索
            if(target > nums[m]) {
                binarySearch(m + 1, r)
            } else {
                binarySearch(l, m - 1)
            }
        }
    }
    binarySearch(0, nums.length - 1)
    return result
};
// @lc code=end

console.log(search([4,5,6,7,0,1,2], 0))
console.log(search([4,5,6,7,0,1,2], 3))
console.log(search([1], 0))