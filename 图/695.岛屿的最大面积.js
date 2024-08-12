/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * 和刚才做的岛屿数量题几乎一样，只是每个题问的答案不一样而已，整体算法逻辑一模一样
 * @param {number[][]} grid
 * @return {number}
 */
const findMaxArea = (grid, i, j) => {
    // 超出边界了
    if(!(i >= 0 && i < grid.length && j >= 0 && j < grid[0].length)) {
        return 0
    }
     // 不是岛屿或者已经被遍历过了
    if(grid[i][j] !== 1) {
        return 0
    }
    // 标记当前已经遍历过了
    grid[i][j] = 2
    
    // 继续探索并标记，遍历上下左右，得到面积之和
    return 1 +
        findMaxArea(grid, i - 1, j) +
        findMaxArea(grid, i + 1, j) +
        findMaxArea(grid, i, j - 1) +
        findMaxArea(grid, i, j + 1)
}
var maxAreaOfIsland = function(grid) {
    let maxArea = 0
    for(let i = 0; i < grid.length; i ++) {
        for(let j = 0; j < grid[0].length; j ++) {
            // 只有是1才需要去遍历
            if(grid[i][j] === 1) {
                const area = findMaxArea(grid, i, j)
                maxArea = Math.max(maxArea, area)
            }
        }
    }
    return maxArea
};
// @lc code=end

console.log(maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]))