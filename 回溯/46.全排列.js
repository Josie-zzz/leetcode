/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * 回溯算法部分的时间复杂度是O(n!)，但是我每次都复制一遍 visitArr 数组，最后还复制结果数组，所以我觉得时间复杂度是O(n! * n! * n)
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

/**
 * 参考了下题解，可以使用交换的思路来解这个问题，时间复杂度是 O(n×n!)，比上面的优雅一点
 * 思路是：假设每个位置都是空格，比如第一个位置，通过将所有后面的数与第一个交换，得到所有可能
 * 每次交换都相当于这个位置已排好，然后继续交换剩下的即可，每层都如此，完事后就回退，下一轮继续交换。
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    // 保存所有数组
    const result = []
    // idx指的是当前操作的索引
    const findResult = (idx) => {
        // 如果当前索引到顶了说明遍历完了，复制数组
        if(idx === nums.length) {
            result.push([...nums])
            return 
        }
        // 遍历每一层的数进行交换，注意初始位置是当前 i = idx
        for(let i = idx; i < nums.length; i ++) {
            // 交换
            [nums[idx], nums[i]] = [nums[i], nums[idx]];
            // 完事后下一层 +1
            findResult(idx + 1);
            // 回退
            [nums[i], nums[idx]] = [nums[idx], nums[i]]
        }
    }
    findResult(0)
    return result
};

console.log(permute(arr))