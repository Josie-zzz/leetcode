/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * 这道题写了一个多小时，最开始没有确切的思路，瞎写，无厘头，写废了很多，一度怀疑自我，最后想清楚了，就写出来了
 * 他这个就是遍历数组每一项，然后从每一项一直往前找，直到数组开头，看是否存在一串连续数组相加等于k的
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let len = 0
    // 遍历数组每一项，看是否存在一串前缀之和等于k的
    for(let i = 0; i < nums.length; i++) {
        let sum = 0
        for(let j = i; j >= 0; j--) {
            sum = sum + nums[j]
            if(sum == k) {
                len++
            }
        }
    }
    return len
};

// @lc code=end
console.log(subarraySum([1,-1,0], 0))
