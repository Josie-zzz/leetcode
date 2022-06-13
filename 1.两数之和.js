/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

/**
 * 暴力解法：依次遍历每一项，之和相加等于target则返回。【最简单最暴力的解法】
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
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
 * 优雅解法：使用hash map方法，依次遍历每个元素，用target - 当前元素，如果在hash对象中找不到就存进去，否则就返回。
 * 暴力解法时间复杂度较高的原因是寻找 target - x 的时间复杂度过高，使用哈希表，可以将寻找 target - x 的时间复杂度降低到从 O(N) 降低到 O(1)。
 * 时间复杂度：O(n)
 * 空间复杂度：O(n) 【hash表的开销】
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
