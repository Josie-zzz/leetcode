/*
 * @lc app=leetcode.cn id=1207 lang=javascript
 *
 * [1207] 独一无二的出现次数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = new Map()
    arr.forEach(v => map.set(v, (map.get(v) || 0) + 1))
    const b = Array.from(map.values())
    return b.length === new Set(b).size
};
// @lc code=end

