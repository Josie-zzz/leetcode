/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * 既然放在hash 表标签里，那就万变不离其宗呗
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(!strs.length) {
        return []
    }
    // 存结果，二维数组
    const newStrs = []
    // 存每个索引下的hash map，将字母拆进去
    const hashArr = []
    strs.forEach(val => {
        // 储存hash表，并记录总长度
        const hashMap = {
            vals: {},
            length: 0,
        }
        for(const i of val) {
            if(!hashMap.vals[i]) {
                hashMap.vals[i] = 1
            } else {
                // 因为会出现相同字符的情况，所以key是字符，value是出现次数
                hashMap.vals[i]++
            }
            hashMap.length++
        }
        // 遍历存储过的字符串集合，有就push，没有就新增
        const pass = hashArr.some((sp, index) => {
            // 总长度一样，每个字符出现的次数一样，才说明是同一个字符集
            if(sp.length !== hashMap.length) {
                return false
            }
            let same = true
            for (let key in hashMap.vals) {
                if(hashMap.vals[key] !== sp.vals[key]){
                    same = false
                    break;
                }
            }
            if(same){
                newStrs[index].push(val)
            }
            return same
        })
        if(!pass) {
            newStrs.push([val])
            hashArr.push(hashMap)
        }
    })
    return newStrs
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]), 'll')
// @lc code=end
