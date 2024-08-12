/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = []
    const stack = []
    // 用map表保存，用于去重
    const stackMap = []
    const map = new Map()
    const backTrack = (diff) => {
        // 如果超出数字，就直接返回
        if(diff < 0) {
            return 
        }
        // 恰好等于0就是想要的组合，但是会有重复，需要去重
        if(diff === 0) {
            // 去重检查
            const repeat = stackMap.some(m => {
                // 验证是否每一项都相同
                return [...map.entries()].every(([key, value]) => (m.get(key) || 0) === value)
            })
            // 不重复就加入到结果中
            if(!repeat) {
                stackMap.push(new Map(map))
                result.push([...stack])
            }  
            return
        }
        // 每次从索引0开始，因为可以重复选择数字
        for(let i = 0; i < candidates.length; i ++) {
            const num = candidates[i]
            // 入栈
            stack.push(num)
            map.set(num, (map.get(num) || 0) + 1)
            // 探索
            backTrack(diff - num)
            // 回退
            map.set(num, map.get(num) - 1)
            stack.pop()
        }
    }
    backTrack(target)

    return result
};
// @lc code=end

console.log(combinationSum([2,3,6,7], 7))
console.log(combinationSum([8,7,4,3],11))
console.log(combinationSum([3,2,6,7],11))