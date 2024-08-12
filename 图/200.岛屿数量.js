/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * 套路题，想了一会感觉不会，然后看别人的题解，学会套路后会了，感觉还不算难。。
 * 这个题就是学会图的网格dfs遍历法就行了，学会后不难
 * @param {character[][]} grid
 * @return {number}
 */
const findArea = (grid, i, j) => {
    // 超出边界了
    if(!(i >= 0 && i < grid.length && j >= 0 && j < grid[0].length)) {
        return 
    }
    // 不是岛屿或者已经被遍历过了
    if(grid[i][j] !== '1') {
        return
    }
    // 标记当前已经遍历过了
    grid[i][j] = '2'
    
    // 继续探索并标记，遍历上下左右
    findArea(grid, i - 1, j)
    findArea(grid, i + 1, j)
    findArea(grid, i, j - 1)
    findArea(grid, i, j + 1)
}
var numIslands = function(grid) {
    let count = 0
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === '1') {
                count++
                // 探索并标记
                findArea(grid, i, j)
            }
        }
    }
    return count
};
// @lc code=end

console.log(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]))
console.log(numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]))