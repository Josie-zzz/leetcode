/*
 * @lc app=leetcode.cn id=443 lang=javascript
 *
 * [443] 压缩字符串
 */

// @lc code=start
/**
 * 部分case通过，["a","a","a","b","b","a","a"] 这个case不通过，因为两个a不一样
 * @param {character[]} chars
 * @return {number}
 */
var _compress = function(chars) {
    const map = new Map()
    let p = 0
    while(p < chars.length) {
      const c = chars[p]
      map.set(c, (map.get(c) || 0) + 1)
      p ++
    }

    // 这是创建一个新的数组，题目要求转存到chars中
    // let result = []
    // Array.from(map.entries()).forEach(([k, v]) => {
    //   debugger
    //   result.push(k)
    //   if(v > 1) result.push(`${v}`)
    // })
    // return result

    // 覆盖原数组
    let str = ''
    Array.from(map.entries()).forEach(([k, v]) => {
      str = str + k + (v > 1 ? v : '')
    })
    let i = 0
    while(i < chars.length) {
      if(str[i]) {
        chars[i] = str[i]
        i ++
      } else {
        chars.splice(i, 1)
      }
    }
    return chars.length
};
// @lc code=end

/**
 * 
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  // left代表这个字符串的开始，right代表结束
  let left = 0, right = 0
  // c代表要操作的位置
  let c = 0
  while(right < chars.length) {
    // 要么字符串结束，要么数组结束，之前判断逻辑写的不好导致我总有case不通过
    if(chars[right + 1] !== chars[left] || right + 1 === chars.length) {
      const count = right - left + 1
      chars[c] = chars[left]
      c ++
      // 将数字插入到数组中，要考虑长度
      if(count > 1) {
        const str = `${count}`
        let i = 0
        while(i < str.length) {
           chars[c] = str[i]
           i ++
           c ++
        }
      }
      // 重置字符串
      left = right + 1
      right = left
    } else {
      // 否则就是右侧指针继续探索
      right ++
    }
  }

  // 注意不要 c++，因为长度在变化
  while(c < chars.length) {
    chars.splice(c, 1)
  }

  return chars.length
};

// console.log(compress(["a","a","b","b","c","c","c"]))
// console.log(compress(["a","a","a","b","b","a","a"]))
console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]))
// console.log(compress(["a","a","a","b","b","a","a"]))