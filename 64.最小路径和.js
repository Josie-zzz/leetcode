/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * 因为只能往下或者往右，所以当前位置的最小值取决于上面和下面最小的值，所以从二维数组最头开始算，算出每个位置的最小值从而推算出最后一个位置的最小值
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const arr = new Array(grid.length).fill([])
    for(let i = 0; i < grid.length; i ++) {
        for(let j = 0; j < grid[i].length; j ++) {
            if(i === 0) {
                // 如果是第一排，最小值就是前面+当前的数
                arr[i][j] = (arr[i][j - 1] || 0) + grid[i][j]
            } else if(j === 0) {
                // 或者竖着第一排，这里arr[i - 1]不会报错，因为横着第一排遍历过了，最小值就是上面+当前的数
                arr[i][j] = arr[i - 1][j] + grid[i][j]
            } else {
                // 否则就是上面和下面相对较小的数
                arr[i][j] = Math.min(arr[i][j - 1], arr[i - 1][j]) + grid[i][j]
            }
        }
    }
    return arr[grid.length - 1][grid[0].length - 1]
};
// @lc code=end

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]))