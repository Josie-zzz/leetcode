/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let plus = 1
    for(let i = digits.length - 1; i >= 0; i--) {
        const sum = plus + digits[i]
        digits[i] = sum % 10
        plus = Math.floor(sum / 10)
    }
    if(plus){
        digits.unshift(plus)
    }
    return digits
};
// @lc code=end
console.log(plusOne([1,2,3]))
