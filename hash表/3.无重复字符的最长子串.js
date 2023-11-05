/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * 这个问题是这样的，无重复的连在一起的字符串，所以一定得需要两个指针，其实看到提示（滑动窗口）我就已经有感觉了，所以我的思路如下：
 * 想象两个指针形成一个滑动的窗口，这个窗口忽大忽小但是是连在一起的，而且我们只需要找到最长的窗口是多少就行了
 * 定义一个hash 对象，储存每个字符出现的最新的下标，定义左指针p1，右指针p2，一开始都指向index为0
 * 移动右指针，假如右指针的数在hash map中出现过，改变左指针为出现位置的下一个
 * 这里注意一点，只要出现过的数字都会存在hash map中，所以在判断的时候要加一个条件就是必须得在窗口内
 * 时间复杂度：O(n)
 * 空间复杂度：O(n) n为字符空间
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(!s.length){
        return 0
    } else {
        let p1 = 0, p2 = 0
        let longStr = 1 //最短字符长度为1
        let repeat = {} //储存重复数组的下标
        repeat[s[0]] = 0

        // 遍历到最后一个数，这里是小于最后一个数，因为一进循环就加1了
        while(p2 < s.length - 1){
            // 先自增
            p2++
            // 尝试找到p2在repeat中是否存在
            let repeatIndex = repeat[s[p2]]
            // 如果没有存在或者 存在并且不在当前的滑动窗口内（小于p1就行，如果等于p1的话else会处理），就要判断当前的长度是否是最长的
            if(repeatIndex === undefined || repeatIndex < p1){
                let str = p2 - p1 + 1
                longStr = longStr < str ? str : longStr
            } else {
                // 否则就让p1指向之前重复的数字的下一个，p2先不动，下一个循环会自增
                p1 = repeatIndex + 1
            }
            // 每次走到后面新的数字都要更新hash表他新位置，不管他之前有没有出现
            repeat[s[p2]] = p2
        }

        return longStr
    }
};

console.log(lengthOfLongestSubstring('tmmzuxt'))
// @lc code=end

