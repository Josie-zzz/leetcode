/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * 找出所有可以出发的地点，遍历，然后验证是否可以环绕一周
 * 下面的解法大部分case都通过了，但是极端case没过。。
 * 第二个优化了下，好使了，其实和第一个思路差不太多
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let findStart = []
    // 收集所有可以行驶到下一站的索引，因为都有可能会环绕一周
    for(let i = 0; i < gas.length; i++) {
        const diff = gas[i] - cost[i]
        if(diff > 0) {
            findStart.push(i)
        }
    }
    // 如果一开始就没找到，就直接返回 -1
    if(!findStart.length) {
        return -1
    }

    // 验证从索引开始是否可以环绕一周
    const validateIndex = (start) => {
        // 设置初始容器为0
        let container = 0
        // 从找到的位置开始验证
        let index = start
        // 用len记录需要走的距离
        let len = gas.length
        while(len) {
            // 取余，就可以让索引又绕回来
            index = index % gas.length
            // 重新计算容器
            container = container + gas[index] - cost[index]
            // 如果计算后的容量小于 0，说明无法继续行驶了
            if(container < 0) {
                return false
            }
            index ++
            len --
        }
        
        return true
    }
   
    // 找到一个通过验证的索引
    const result = findStart.find(val => validateIndex(val))
    if(result !== undefined) {
        return result
    }

    return -1
};
// @lc code=end

/**
 * 其实就是在上一个算法的基础上优化了一下就没有超时了，超时的原因在于重复计算
 */
canCompleteCircuit = function(gas, cost) {
    // 特殊场景
    if(gas.length === 1 && gas[0] === cost[0]) {
        return 0
    }
    // 记录所有路途的剩余容量
    const diff = []
    // 记录容量不为0的索引
    const findStart = []
    for(let i = 0; i < gas.length; i++) {
        diff[i] = gas[i] - cost[i]
        if(diff[i] > 0) {
            findStart.push(i)
        }
    }

    // 验证从索引开始是否可以环绕一周
    const validateIndex = (start) => {
        // 设置初始容器为0
        let container = 0
        // 从找到的位置开始验证
        let index = start
        // 用len记录需要走的距离
        let len = gas.length
        while(len) {
            // 取余，就可以让索引又绕回来
            index = index % gas.length
            // 重新计算容器
            container = container + diff[index]
            // 如果计算后的容量小于 0，说明无法继续行驶了
            if(container < 0) {
                return false
            }
            index ++
            len --
        }
        
        return true
    }

     // 找到一个通过验证的索引
    const result = findStart.find(val => validateIndex(val))
    if(result !== undefined) {
        return result
    }

    return -1
}

console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]))
console.log(canCompleteCircuit([2,3,4], [3,4,3]))
console.log(canCompleteCircuit([5,8,2,8], [6,5,6,6]))
console.log(canCompleteCircuit([5,1,2,3,4], [4,4,1,5,1]))
console.log(canCompleteCircuit([3,1,1], [1,2,2]))
console.log(canCompleteCircuit([2], [2]))
