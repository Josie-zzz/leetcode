/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 * 题目要求把一些路径简化成简单形式的绝对路径，说实话这个格式我没用过。。
 */

// @lc code=start
/**
 * 利用栈解决
 * 只需要关心每一层都有什么即可，最后出栈拼成字符串就好了
 * 而那些符号就是判断条件
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    // 先按照 / 将字符串分开
    const pathArr = path.split('/')
    const stack = []
    pathArr.forEach((str, i, a) => {
        // 如果是两个.的情况，以为这下一级在本级的上一级，所以就弹出
        if(str === '..') {
            stack.pop()
        } else if (str === '.') {
            // 一个. 什么也不做
        } else if (/^[a-zA-Z._0-9]+$/.test(str)) { // 如果是【字母，数字，下划线，点】组成的 或者大于两个.的情况，就 push
            stack.push(str)
        }
        // 其他情况，比如 一个. 或者空串的情况就不处理
    })
    // 最后拼接即可
    return `/${stack.join('/')}`
};
// @lc code=end
console.log(simplifyPath("/home/foo/.ssh/../.ssh2/authorized_keys/"))

// 看了下官网，思路和我一样嘿嘿，但是判断比我的简单点
simplifyPath = function(path) {
    // 先按照 / 将字符串分开
    const pathArr = path.split('/')
    const stack = []
    pathArr.forEach((str, i, a) => {
        if(str === '..') {
            stack.pop()
        } else if (str.length && str !== '.') {
            stack.push(str)
        }
    })
    // 最后拼接即可
    return `/${stack.join('/')}`
};