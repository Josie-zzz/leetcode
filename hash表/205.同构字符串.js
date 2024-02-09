/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * 按照我敏锐的嗅觉，突然就知道这个题该如何做了。
 * 遍历其中一个字符串，如果 hash 表中没有就存到 hash 中，如果有，就取出来判断另一个字符串是否是预期的
 * 因为题目要求说是，映射关系是不变的
 * 看了下官方题解和我的差不多，只是用了两个 hash 表
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) {
        return false
    }
    const hashMap = new Map()
    // 因为题目有要求说是不同的字符不可以映射同一个字符，所以用一个集合存一下映射过的字符
    const union = new Set()
    for(let i = 0; i < s.length; i ++) {
        // 如果 hash 表中不存在并且 t 也没有被加入映射中，就把相同位置的字符串映射存起来
        if(!hashMap.has(s[i]) && !union.has(t[i])) {
            hashMap.set(s[i], t[i])
            union.add(t[i])
        } else {
            // 存在的话，就取出来判断一下
            const str = hashMap.get(s[i])
            if(!str || str !== t[i]) {
                return false
            }
        }
    }
    return true
};
// @lc code=end
isIsomorphic("badc", "baba")
