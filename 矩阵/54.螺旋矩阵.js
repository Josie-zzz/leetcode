/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * emm就是要找到一种遍历规律或者方式吧。
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    // 初始化边界值
    let x_i = 0, x_j = matrix[0].length - 1
    let y_i = 0, y_j = matrix.length - 1
    const arr = []
    // 如果在边界内就遍历
    while(x_i <= x_j && y_i <= y_j) {
        let i,j
        // 向右
        for(i = x_i; i <= x_j; i++) {
            arr.push(matrix[y_i][i])
        }
        // 向下，如果超出边界了就跳出循环
        if(y_i + 1 > y_j) break
        for(j = y_i + 1; j <= y_j; j++) {
            arr.push(matrix[j][x_j])
        }
        // 底部向左,如果超出边界了就跳出循环
        if(x_j - 1 < x_i) break
        for(i = x_j - 1; i >= x_i; i--) {
            arr.push(matrix[y_j][i])
        }
        // 底部向上
        for(j = y_j - 1; j > y_i; j--) {
            arr.push(matrix[j][x_i])
        }
        // 收窄边界
        x_i = x_i + 1
        x_j = x_j - 1
        y_i = y_i + 1
        y_j = y_j - 1
    }
    return arr
};
// @lc code=end

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))
console.log(spiralOrder([[7],[9],[6]]))
console.log(spiralOrder([[2,5,8],[4,0,-1]]))