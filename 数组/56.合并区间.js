/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// 判断重叠的逻辑
function isCover(arr1, arr2) {
    // 要么 arr1 在arr2左边，要么右边，除此之外都是重叠
    if (arr1[1] < arr2[0] || arr1[0] > arr2[1]) {
        return false
    }
    return true
}
function sort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j][0] < arr[i][0]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr
}

// @lc code=start
/**
 * 一顿暴力操作猛如虎，结果还是做不对，参考了官方的答案
 * 先对左边的数，也就是开始的点进行排序，那么最终的数组中，能够合并的数组就会是连续的，然后在进行操作就会方便很多
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    const newArr = sort(intervals)
    const finish = [newArr[0]]
    for(let i = 0; i < newArr.length; i++) {
        const compare = finish[finish.length - 1]
        const arr = newArr[i]
        if(isCover(compare, arr)) {
            const newArr = [Math.min(compare[0], arr[0]), Math.max(compare[1], arr[1])]
            finish[finish.length - 1] = newArr
        } else {
            finish.push(arr)
        }
    }
    return finish
}

const result = merge([[2,3],[4,6],[5,7],[3,4]])
// @lc code=end
console.log(result)
