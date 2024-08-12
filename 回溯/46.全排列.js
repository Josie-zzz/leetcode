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
    // visitArr 就是可以做选择的列表
    const findResult = (visitArr) => {
        // 如果没有选择可以做了，说明到底了，就将结果存起来
        if(!visitArr.length) {
            // 一般都需要复制下，时间复杂度是 O(n)
            result.push([...stack])
            return
        }
        // 遍历可以做选择的数据，也就是当前这个位置可以做的选择
        for(let i = 0; i < visitArr.length; i++) {
            const ele = visitArr[i]
            // 复制剩下的可能，继续递归遍历，逐级减少
            const arr = visitArr.filter(v => v !== ele)
            // 将当前做的选择压入到栈中
            stack.push(ele)
            // 继续做下一级的选择
            findResult(arr)
            // 当子节点的可能都遍历完后，就回退到这一级，撤销刚才的选择，继续做下一个选择
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