/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * 我的思路是将所有的元音字母找出来，然后挨个遍历，首位替换。
 * 我看官方题解，可以用双指针的思路遍历一遍就行，也是个方式。
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const yuan = ['a','e','i','o','u']
  const yuanUp = yuan.map(v => v.toLocaleUpperCase())
  const union = new Set(yuan.concat(yuanUp))
  const arr1 = []
  for(let i = 0; i < s.length; i ++) {
    if(union.has(s[i])) {
      arr1.push(s[i])
    }
  }
  let pointor = 0
  let str = ''
  for(let i = 0; i < s.length; i ++) {
    if(s[i] === arr1[pointor]) {
      const index = arr1.length - 1 - pointor
      str = str + arr1[index]
      pointor ++
    } else {
       str = str + s[i]
    }
  }
  return str
};
// @lc code=end

console.log(reverseVowels("IceCreAm"))