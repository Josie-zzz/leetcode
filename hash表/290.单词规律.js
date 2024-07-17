/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * 遍历模式字符串和单词数组，用map表保存模式和单词的映射，如果有映射就判断单词是否相等，没有就添加
 * 时间复杂度是 O(m+n) 【拆分单词为数组是 O(m),遍历pattern 是 O(n),map 的读写是 O(1)】
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    // 保存模式和单词的相互的一个映射
    const hashMap = new Map()
    const workMapStr = new Map()
    // 根据空格拆分单词，用正则匹配不管间隔多少个空格
    const arr = s.split(/\s+/)
    // 如果长度不一致就直接返回false
    if(pattern.length !== arr.length) {
        return false
    }
    // 遍历规则，判断单词数组是否符合匹配格式
    for(let i = 0; i < pattern.length; i++) {
        // 如果 map不存在，就保存，这里注意是字符和单词的双向匹配
        if(!hashMap.has(pattern[i]) && !workMapStr.has(arr[i])) {
            hashMap.set(pattern[i], arr[i])
            workMapStr.set(arr[i], pattern[i])
        } else {
            // 如果存在就判断匹配的单词是否和当前的单词一致
            const word = hashMap.get(pattern[i])
            if(word !== arr[i]) {
                return false
            }
        }
    }
    return true
};
// @lc code=end

console.log(wordPattern("abba", "dog cat cat dog"))
console.log(wordPattern("abba", "dog dog dog dog"))
console.log(wordPattern("abc", "b c a"))