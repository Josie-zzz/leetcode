/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * 思路就是用滑动窗口，扩大边界和收窄边界的方式，找打最长的子序列
 * 如果这个字符在窗口内没有就移动右指针，如果有就移动左指针和右指针。注意每一次右指针都需要移动，左指针移动到重复字符下一个位置
 * 这里记录了字符串，虽然题目要求是个数，这样通用些
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 左指针
    let p1 = 0
    // 右指针
    let p2 = 0
    // 不重复子串
    let max = 0
    // 一个映射表，记录每个字符，保存每个字符最后出现的位置
    const map = new Map()
    while(p2 < s.length) {
        // 保存当前字符
        const current = s[p2]
        // 判断当前字符，如果出现过，就移动左指针到上次出现的下一个位置
        if(map.has(current) && map.get(current) >= p1) {
            // 修改左指针
            p1 = map.get(current) + 1
        }
        // 判断这段子串是否是最长的，是的话就替换
        const len = p2 - p1 + 1
        if(len > max) {
            max = len
        }
        // 记录当前指针到 map 表中
        map.set(current, p2)
        p2 ++
    }
    // 返回子串长度
    return max
};
// @lc code=end
console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("abc"))
console.log(lengthOfLongestSubstring(""))
console.log(lengthOfLongestSubstring("aa"))
console.log(lengthOfLongestSubstring("a"))
console.log(lengthOfLongestSubstring("aab"))
