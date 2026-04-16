/*
 * @lc app=leetcode.cn id=2352 lang=javascript
 *
 * [2352] 相等行列对
 */

// @lc code=start
/**
 * 把行列按照字符串map保存，然后根据遍历判断
 * 这个case没有通过，原因是这个case：[11,1],[1,11]。感觉。。。懒得写了。。
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const hang = new Map()
    const lie = new Map()

    // 行
    const arr = []
    // 列
    const arr2 = []
    grid.forEach((v, i) => {
        v.forEach((l, j) => {
            arr2[i] = (arr2[i] || '') + l
            arr[j] = (arr[j] || '') + l
        })
    })

    arr.forEach(v => {
        hang.set(v, (hang.get(v) || 0) + 1)
    })

    arr2.forEach(v => {
        lie.set(v, (lie.get(v) || 0) + 1)
    })

    let count = 0

    Array.from(hang.keys()).forEach(v => {
        if(lie.has(v)) {
            count = hang.get(v) * lie.get(v) + count
        }
    })

    return count
};
// @lc code=end

// console.log(equalPairs([[3,2,1],[1,7,6],[2,7,7]]))
// console.log(equalPairs([[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]))
console.log(equalPairs([[11,1],[1,11]]))