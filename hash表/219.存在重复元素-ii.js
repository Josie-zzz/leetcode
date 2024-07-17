/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * 利用map表保存最新的相同值的索引，每次判断即可
 * 时间复杂度 O(n)，空间负责度 O(m)
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    // 保存每个数最新的索引
    const lastMap = new Map()
    for(let i = 0; i < nums.length; i ++) {
        const num = nums[i]
        // 如果存在就判断和上次的间距是否小于等于k
        if(lastMap.has(num)) {
            const last = lastMap.get(num)
            // 满足情况就返回true，否则更新值
            if(i - last <= k) {
                return true
            } else {
                lastMap.set(num, i)
            }
        } else {
            lastMap.set(num, i)
        }
    }
    return false
};
// @lc code=end
// 小小优化一下
containsNearbyDuplicate = function(nums, k) {
    // 保存每个数最新的索引
    const lastMap = new Map()
    for(let i = 0; i < nums.length; i ++) {
        const num = nums[i]
        // 如果存在就判断和上次的间距是否小于等于k
        if(lastMap.has(num) && i - lastMap.get(num) <= k) {
            return true
        }
        // 更新当前值的索引
        lastMap.set(num, i)
    }
    return false
};

console.log(containsNearbyDuplicate([1,2,3,1], 3))
console.log(containsNearbyDuplicate([1,0,1,1], 1))
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))