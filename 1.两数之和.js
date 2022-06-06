/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

/**
 * 暴力解法：依次遍历每一项，之和想加等于target则返回
 * 时间复杂度：O(n^2)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let _twoSum = function (nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
}

// @lc code=start
/**
 * 优雅解法：使用hash map方法
 * 时间复杂度：O(n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function (nums, target) {
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        let subtr = target - nums[i]
        if(hash[subtr] !== undefined){
            return [i, hash[subtr]]
        }

        hash[nums[i]] = i
    }
}
// @lc code=end
console.log(twoSum([2,7,11,15], 9))
