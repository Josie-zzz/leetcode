/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * 利用 hash map 实现，时间复杂度为 O(n)、空间复杂度为 O(n)
 * 其实题目要求空间复杂度为 O(1)，看了下还有其他办法，以后再说吧，不是很要紧
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const hash = new Map()
    nums.forEach(v => {
        if(hash.has(v)) {
            const count = hash.get(v)
            hash.set(v, count + 1)
        } else {
            hash.set(v, 1)
        }
    })
    let max
    for(let key of hash.keys()) {
        if(max === undefined || hash.get(key) > hash.get(max)) {
            max = key
        }
    }
    return max
};
// @lc code=end
majorityElement([3,2,3])
