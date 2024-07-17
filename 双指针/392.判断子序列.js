/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * 用map表保存父字符串所有字符的位置，然后遍历子字符串比较相对位置是否一致
 * 下面的写法就会发现，并不是所有的case都能覆盖到，后面出现的case不通过就又要兼容，变得越来越复杂不好理解，说明这个思路行不通。。。
 *  error，看第二个解法。。
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // 子串比父串长自然就是false
    if(s.length > t.length) {
        return false
    }
    // 建立一个map表，将父字符串的索引存下来，也是每个字符的绝对位置
    const map = new Map()
    for(let i = 0; i < t.length; i ++) {
        // 保存的是数组，因为可能有重复的字符
        if(map.has(t[i])) {
            map.get(t[i]).push(i)
        } else {
            map.set(t[i], [i])
        }
    }
    // 遍历子字符串，依次检查每个字符串
    // 本来是for循环判断下一个，结果无法兼容一个字符串的，这个方式比较好些
    let index = 0
    while(index < s.length) {
        // 如果包含：正常来说就 + 1判断下一个，但是非第一个位置要判断和前一个字符的相对位置是否和付字符串一致，不一致就返回false
        if(map.has(s[index])) {
            if(index !== 0) {
                // 先查看前一个字符数组是否还有值，没有说明相同的字符串数量不匹配
                const pre = map.get(s[index - 1])
                if(!pre.length) {
                    return false
                }
                // 弹出，然后在判断下一个的，因为前一个和下一个字符可能会一样
                const preIndex = pre.shift()
                const curt = map.get(s[index])
                if(!curt.length) {
                    return false
                }
                // 注意这里是前一个shift移出来，当前不动，因为当前位置下一个字符还要比较，比较完事不用了才需要移出去
                
                if(preIndex > curt[curt.length - 1]) {
                    return false
                }
            }
            index ++
        } else {
            return false
        }
    }
    return true
};
// @lc code=end

/**
 * *双指针解法
 * 这个解法确实比我上面的好太多了。。。。。
 * 思路：设置两个指针分别指向两个字符串的起始位置，试图从父字符串中找到匹配子字符串的字符
 * 如果相同两个指针都 +1，不相同的话就移动父字符串的指针
 * while循环的条件是指针都在字符串的范围内
 * 结束后判断子字符串是否遍历完就能得出结论
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
isSubsequence = function(s, t) {
    if(s.length > t.length) {
        return false
    }
    let i = 0
    let j = 0
    while(i < s.length && j < t.length) {
        if(s[i] === t[j]) {
            i++
            j++
        } else {
            j++
        }
    }
    if(i === s.length) {
        return true
    }
    return false
};

console.log(isSubsequence("abc", "ahbgdc"))
console.log(isSubsequence("axc", "ahbgdc"))
console.log(isSubsequence("b", "c"))
console.log(isSubsequence("aaaaaa", "bbaaaa"))
console.log(isSubsequence("bb", "ahbgdc"))