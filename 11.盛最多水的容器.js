/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * 暴力解法：计算出每一对的水量，得出最大的面积
 * 时间复杂度O(n^2)，对于数组很长的case会超时
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0
    for(let i = 0; i < height.length - 1; i++){
        for(let j = i + 1; j < height.length; j++){
            // 宽度就是两者的间距
            const width = Math.abs(j - i)
            // 容器真实能盛水的高度取决于两个高度的最短的
            const container = width * Math.min(height[j], height[i])
            if(container > max) {
                max = container
            }
        }
    }
    return max
};
// @lc code=end

/**
 * 双指针解决这个问题：这个问题的难点在于一看到可能反应不过来用双指针解决，在一个就是移动指针的条件是什么
 * 设置左右两个指针，计算容器并比较。然后移动较短那边的指针，因为容器的盛水高度取决于最短的那边，虽然宽度会减少。但是一上来想太多就无从下手。
 */
maxArea = function(height) {
    let max = 0
    let left = 0
    let right = height.length - 1
    while(left < right) {
        // 计算新的盛水容器
        const container = Math.abs(right - left) * Math.min(height[left], height[right])
        if(container > max) {
            max = container
        }
        // 移动高度短的那边的指针
        if(height[left] < height[right]) {
            left ++ 
        } else {
            right --
        }
    }
    
    return max
};
console.log(maxArea([1,1]))
console.log(maxArea([1,8,6,2,5,4,8,3,7]))


