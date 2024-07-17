/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * 刚做完 242 题，感觉是那个题的变种，几乎和那个一致，还是遍历两个字符串保存每个字符出现的次数
 * 然后判断 ransomNote 每个字符出现的次数只要小于等于 magazine 里面就可以了
 * 时间复杂度 O(n)
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    // 遍历保存每个字符次数
    const ransomNoteMap = new Map()
    const magazineMap = new Map()
    for (let i = 0; i < ransomNote.length; i++) {
        const count = ransomNoteMap.get(ransomNote[i]) || 0
        ransomNoteMap.set(ransomNote[i], count + 1)
    }
    for (let i = 0; i < magazine.length; i++) {
        const count = magazineMap.get(magazine[i]) || 0
        magazineMap.set(magazine[i], count + 1)
    };
    return Array.from(ransomNoteMap.entries()).every(([key, val]) => val <= (magazineMap.get(key) || 0))
};
// @lc code=end
console.log(canConstruct('aa', 'aab'))
