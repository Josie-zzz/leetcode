/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * 【暴力解法就是重新创建一个数组然后一一对应写过去位置，时间复杂度 O(n^2)，空间复杂度 O(n^2)】
 * 题目要求原地算法，所以大致思路就是：
 * 每一圈每一圈开始旋转，从外层开始，一层一层转，只需要旋转一半即可
 * 然后对于每一层，比如有 i 个元素，只需要操作 i- 1 个元素。
 * 思路捋清楚后，问题就在于四个点的坐标如何寻找，我按照这个思路，没把坐标捋顺，case 没通过，看了题解和我思路一样。
 * 时间复杂度 O(n^2)
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const len = matrix.length
    for(let i = 0; i < Math.ceil(len); i ++) {
        // 这里是 n 是因为矩阵是方形的，长宽一样
        const lastIndex = len - 1
        for(let j = i; j < lastIndex - i; j ++) {
            // 找到四个点：[i, j], [j, lastIndex - i], [lastIndex - i, lastIndex - j],[lastIndex - j, i]
            // 流泪了，这四个点好难找。。。。。
            let t = matrix[lastIndex - j][i]
            matrix[lastIndex - j][i] = matrix[lastIndex - i][lastIndex - j]
            matrix[lastIndex - i][lastIndex - j] = matrix[j][lastIndex - i]
            matrix[j][lastIndex - i] = matrix[i][j]
            matrix[i][j] = t
        }
    }
};
// @lc code=end
// const test = [[1,2,3],[4,5,6],[7,8,9]]
test = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
rotate(test)
console.log(test)