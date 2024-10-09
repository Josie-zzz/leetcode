/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * 其实可以发现规律，边缘位置横排和竖排都是 1
 * 对一个每一个位置来说，可以从上面过来，也可以从左边过来，所以当前位置的可能的路径就是两者相加
 * 所以想要算出最后一个位置的值，就要先算之前的值
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    const graph = new Array(m).fill([])
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if(i === 0 || j === 0) {
                graph[i][j] = 1
            } else {
                graph[i][j] = graph[i - 1][j] + graph[i][j - 1]
            }
        }
    }
    return graph[m - 1][n - 1]
}
// @lc code=end
