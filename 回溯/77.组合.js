/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * 和前面做的全排列啥的题基本都一样，不同点在于每个题的条件稍微不太一样
 * 这个题注意要求每个组合不重复，基本套路都是这个写法
 * 遍历[1,n] 的这个数组，递归层级是k层
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    // 保存选择栈
    const stack = []
    // 结果集
    const result = []
    // idx 表示当前位置，每层循环也是寻找当前位置idx可能的值
    // start 表示开始遍历的位置，因为不能重复，所以每次遍历 +1剩下的数就行了，就可以保证不重复
    const backTrack = (idx, start) => {
        // 如果当前位置大于k，就结束
        if(idx > k) {
            result.push([...stack])
            return
        }
        // 遍历 start 到 n之间的数，i = start 是为了避免重复组合
        for(let i = start; i <= n; i ++) {
            stack.push(i)
            backTrack(idx + 1, i + 1)
            stack.pop()
        }
    }
    backTrack(1, 1)
    return result
};
// @lc code=end

console.log(combine(4,2))