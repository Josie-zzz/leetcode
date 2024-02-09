/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * 因为题目的要求，所以没有用新的数组来做，如果暴力解法其实更简单些
 * 最开始从头开始遍历，发现不好弄写不下去了，后来灵机一动，发现他不是给我长度么
 * 那我倒着遍历，每次找最大的不就完了。。。吼吼吼
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let index = nums1.length - 1
    let p1 = m - 1
    let p2 = n - 1
    while(index >= 0) {
        // 如果 p2 小于 0，说明 nums2没有了，或者有但是p1数更大，那取 nums1的数
        // 否则取nums2的数
        if(p2 < 0 || nums1[p1] >= nums2[p2]) {
            nums1[index] = nums1[p1]
            p1 --
        } else {
            nums1[index] = nums2[p2]
            p2 --
        }

        // 不管判断的结果是怎样，index 位置都会放一个合适的值，最后 --
        index --
    }
    return nums1
};
// @lc code=end

