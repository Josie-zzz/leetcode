/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * 回溯算法部分的时间复杂度是O(n!)，但是我每次都复制一遍 visitArr 数组，所以我觉得时间复杂度是O(n!* n!)
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    // 保存所有数组
    const result = []
    // 保存结果
    const stack = []
    // stack 访问栈，line 是当前组合的结果
    const findResult = (visitArr) => {
        if(!visitArr.length) {
            result.push([...stack])
            return
        }
        // 遍历数组
        for(let i = 0; i < visitArr.length; i++) {
            const ele = visitArr[i]
            // 复制剩下的可能，继续遍历
            const arr = visitArr.filter(v => v !== ele)
            // 压栈
            stack.push(ele)
            findResult(arr)
            // 操作完出栈
            stack.pop()
        }
    }
    findResult(nums)
    return result
};
// @lc code=end

const arr = [1,2,3]
console.log(permute(arr))

