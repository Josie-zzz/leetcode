/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lc code=start
/**
 * 双指针：遍历 haystack ，找到一个等于 needle[0] 的字符，如果相等就停下来遍历 needle，看是否是每个字符都相等
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let findStart = 0
    let n, p
    while(findStart < haystack.length) {
        // 如果相等就遍历子串
        if(haystack[findStart] === needle[0]) {
            p = findStart + 1
            n = 1
            while(n < needle.length) {
                // 如果不相等就跳出循环
                if(haystack[p] !== needle[n]) {
                    break
                }
                p ++
                n ++
            }
            // 判断遍历的位置是否等于字符串长度，如果等于说明遍历完了确实相等
            if(n === needle.length) {
                return findStart
            }
        }
        findStart ++
    }
    // 遍历完了都没找到就返回 -1
    return -1
};
// @lc code=end

console.log(strStr("sadbutsad", "sad"))