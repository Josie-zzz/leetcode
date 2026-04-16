/*
 * @lc app=leetcode.cn id=1657 lang=javascript
 *
 * [1657] 确定两个字符串是否接近
 */

// @lc code=start
/**
 * 如果他不在哈希的分类里面我是不知道用哈希来做的。。知道后知道咋做了，但是没想到很多边界条件考虑不到，老出bug
 * 思路：既然能随意置换，那么判断条件就是：两个数组的字母种类一样，两个数组每个字母种类的数量保持一致
 * 感觉最终通过的case貌似也很冗长。。。
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if(word1.length !== word2.length) {
        return false
    }
    // 统计
    const map1 = new Map()
    const map2 = new Map()
    for(let i = 0; i < word1.length; i++) {
        map1.set(word1[i], (map1.get(word1[i]) || 0) + 1)
    }
    for(let i = 0; i < word2.length; i++) {
        map2.set(word2[i], (map2.get(word2[i]) || 0) + 1)
    }
    
    const values1 = map1.values()
    const values2 = map2.values()
    const keys1 = map1.keys()
    const keys2 = new Set(map2.keys())

    const keyPass = Array.from(keys1).every(v => keys2.has(v))

    const valueMap = new Map()
    const valueMap2 = new Map()
    Array.from(values1).forEach(v => {
        valueMap.set(v, (valueMap.get(v) || 0) + 1)
    })
    Array.from(values2).forEach(v => {
        valueMap2.set(v, (valueMap2.get(v) || 0) + 1)
    })

    const valuePass = Array.from(valueMap.keys()).every(v => valueMap.get(v) === valueMap2.get(v))


    return keyPass && valuePass
};
// @lc code=end
// console.log(closeStrings("cabbba", "aabbss"))
console.log(closeStrings("aaabbbbccddeeeeefffff", "aaaaabbcccdddeeeeffff"))
