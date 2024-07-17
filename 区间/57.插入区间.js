/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

const mergeArr = (a, b) => {
    return [Math.min(a[0], b[0]), Math.max(a[1], b[1])]
}

// @lc code=start
/**
 * 两步走：第一个将数组插入到合适的位置，第二个遍历数组合并有重叠的部分
 * 时间复杂度：O(n)
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    // 先把待合并数组放到数组最后，再将其移动到合适的位置
    intervals.push(newInterval)
    for(let i = intervals.length - 1; i >= 0; i--) {
        if(intervals[i - 1] && intervals[i][0] < intervals[i - 1][0]) {
            [intervals[i], intervals[i - 1]] = [intervals[i - 1], intervals[i]]
        }
    }
    // 创建一个新数组，从第2项开始遍历，mege代表待合并的数组项
    const arr = []
    let index = 1
    let merge = intervals[0]
    // 如果数组遍历完或者merge还有值，就继续
    while(index < intervals.length || merge) {
        // 如果当前有值，需要根据情况判断
        if(intervals[index]) {
            // 如果存在重叠区间，就合并，更新 merge
            if(intervals[index][0] <= merge[1]) {
                merge = mergeArr(merge, intervals[index])
            } else {
                // 如果不存在则把merge push新数组，然后重置merge为当前值
                arr.push(merge)
                merge = intervals[index]
            }
        } else {
            // 如果没值就把merge推进去，并重置merge
            arr.push(merge)
            merge = null
        }
        index ++
    }
    return arr
};
// @lc code=end

console.log(insert([[1,3],[6,9]], [2,5]))
console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]))
console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [9,19]))
console.log(insert([[1,5]], [6,8]))