/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * 转换成字符串解决
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = String(x)
    let left = 0
    let right = str.length - 1
    while(left <= right) {
        if(str[left] !== str[right]) {
            return false
        }
        left++
        right--
    }
    return true
};

/**
 * 翻转一半数字，因为拿不到数值的一半的位置，所以一边分离一边和被分离的数字比较
 */
isPalindrome = function(x) {
    // 注意整除的情况
    if(x < 0 || (x !== 0 && x % 10 === 0)) {
        return false
    }
    let newNum = 0
    // 当新数字大于等于被分离的x的数字时，说明已经分离到一半或者超过一半了
    while(x > newNum) {
        // 将数字从x上分离加到新数字上面
        newNum = newNum * 10 + x % 10
        // 重新计算x的值
        x = Math.floor(x / 10)
    }
    // 因为可能是奇数
    return x === newNum || Math.floor(newNum / 10) === x
};
// @lc code=end
// console.log(isPalindrome(121))
// console.log(isPalindrome(-121))
// console.log(isPalindrome(1221))
// console.log(isPalindrome(-1221))
console.log(isPalindrome(10))
