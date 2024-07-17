/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * 用hash表保存这俩字符串每个字符出现的次数，然后遍历比较，判断每个字符串出现的次数
 * 时间复杂度 O(n)
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // 遍历保存每个字符次数
    const hashS = new Map()
    const hashT = new Map()
    for(let i = 0; i < s.length; i ++) {
        const count = hashS.get(s[i]) || 0
        hashS.set(s[i], count + 1)
    }
    for(let i = 0; i < t.length; i ++) {
        const count = hashT.get(t[i]) || 0
        hashT.set(t[i], count + 1)
    }
    // 比较长度，不相等直接pass
    if(hashS.size === hashT.size) {
        // 判断是否在s出现的字符和次数与t相等
        return [...hashS.entries()].every(([key, val]) => hashT.get(key) === val)
    }
    return false
};
// @lc code=end

console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("rat", "car"))