/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * 至少需要遍历两次，每次查找完岛屿后要判断是否需要替换，题目要求用x替换不包含边界元素的岛屿
 * 所以只有遍历完一个岛屿才知道是否包含边界值，然后在进行一遍替换就行了
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const findArea = (board, i, j) => {
    // 是否含有边界元素
    let flag = false
    // 标记岛屿，ele是查找的元素，mark是需要将其标记的元素
    const markArea = (board, i, j, ele, mark) => {
        // 超出边界了
        if(!(i >= 0 && i < board.length && j >= 0 && j < board[i].length)) {
            return 0
        }
         // 不是岛屿或者已经被遍历过了
        if(board[i][j] !== ele) {
            return 0
        }
        // 标记当前已经遍历过了
        board[i][j] = mark
        // 检查是否有边界元素
        if(i === 0 || j === 0 || i === board.length - 1 || j === board[i].length - 1) {
            flag = true
        }
        
        // 继续探索并标记，遍历上下左右，得到面积之和
        markArea(board, i - 1, j, ele, mark)
        markArea(board, i + 1, j, ele, mark)
        markArea(board, i, j - 1, ele, mark)
        markArea(board, i, j + 1, ele, mark)
    }
    // 现走一遍将’O‘标记
    markArea(board, i, j, 'O', 1)
    // 如果包含边界元素就恢复成之前的样子，否则就用'X'替换
    if(flag) {
        markArea(board, i, j, 1, 'O')
    } else {
        markArea(board, i, j, 1, 'X')
    }
}
var solve = function(board) {
    for(let i = 0; i < board.length; i ++) {
        for(let j = 0; j < board[i].length; j ++) {
            // 如果是"O"才需要遍历
            if(board[i][j] === "O") {
                // 查找岛屿
                findArea(board, i, j)
            }
        }
    }
    return board
};
// @lc code=end
// console.log(solve([["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]))
const arr = [
    ["X","O","X","O","X","O"],
    ["O","X","O","X","O","X"],
    ["X","O","X","O","X","O"],
    ["O","X","O","X","O","X"]
]
console.log(solve(arr))
