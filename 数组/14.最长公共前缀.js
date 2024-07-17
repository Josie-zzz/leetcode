/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * 遍历一次，逐个和后面的字符串对比出来公共部分，再拿公共部分向后比对
 * 时间复杂度为O(mn) n是数组长度，m是字符串的长度，空间复杂度为O(1)不会增加新的空间
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length) {
        return ''
    }
    let common = strs[0]
    for(let i = 1; i < strs.length; i ++) {
        let str = ''
        const crt = strs[i]
        for(j = 0; j < crt.length; j++) {
            if(crt[j] === common[j]) {
                str += crt[j]
            } else {
                break
            }
        }
        common = str
        if(!str) {
            break
        }
    }
    return common
};
// @lc code=end
console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix( ["dog","racecar","car"]))

