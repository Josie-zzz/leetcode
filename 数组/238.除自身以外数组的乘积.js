/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * 因为题目的要求，一个是时间复杂度为O(n)，在一个就是不可以用除法，想了一小会突然开窍
 * 我先算一边前缀乘积，再算一遍后缀乘积，最后把前缀和后缀相乘，不就得到了吗，我太聪明了！！！
 * 完美，代码一遍通过！！！！！！！
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const prefix = []
    const suffix = []
    const result = []
    let init = 1
    for(let i = 0; i < nums.length; i++) {
        prefix[i] = init
        init = init * nums[i]
    }
    init = 1
    for(let i = nums.length - 1; i >= 0; i--) {
        suffix[i] = init
        init = init * nums[i]
    }
    for(let i = 0; i < prefix.length; i++) {
        result[i] = prefix[i] * suffix[i]
    }
    return result
};
// @lc code=end

/**
 * 2026,3,27 第二次做这个题，思路后面也是想了下突然开窍哈哈哈哈
 * 发现之前也是这样想的
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf2 = function(nums) {
    const arr1 = []
    const arr2 = []
    let all = 1
    for(let i = 0; i < nums.length; i++) {
      arr1[i] = all
      all = arr1[i] * nums[i]
    }
    all = 1
    for(let i = nums.length - 1; i >= 0; i--) {
      arr2[i] = all
      all = arr2[i] * nums[i]
    }
    return arr1.map((v, i) => v * arr2[i])
};

console.log(productExceptSelf([1,2,3,4]))
console.log(productExceptSelf([-1,1,0,-3,3]))