/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 * emmmm 大部分 case 都过了，只是数组中重复的数，比如[0,0,0]没过，感觉我这个方法不是特别好。。。
 * 看第二个解法吧，这个解法不太行。。。。。
 */
var threeSum = function(nums) {
    const result = []
    const hash = new Map()
    // 现将所有的数存成 hash
    nums.forEach((v, i) => {
        if(!hash.has(v)) {
            hash.set(v, [i])
        } else {
            hash.get(v).push(i)
        }
    })
    for(let i = 0; i < nums.length - 2; i ++) {
        // 从第一项开始到倒数第三个，寻找想加等于 0 的另外两个数
        const sum = 0 - nums[i]
        // 从当前之后找一下是否存在两个数想加等于 sum 的，其实这里就转换为一个两数之和的算数了
        for(let j = i + 1; j < nums.length; j ++) {
            const sub = sum - nums[j]
            if(hash.has(sub)) {
                // 如果存在就找比当前索引大的是否存在
                const index = hash.get(sub).find(v => v > j);
                if(index) {
                    // 还要排除数组中，重复的组合
                    const exsit = result.some(val => {
                        const same = [i, j, index].every(v => val.includes(nums[v]))
                        if(same) {
                            return true
                        }
                        return false
                    })
                    if(!exsit) {
                        result.push([nums[i], nums[j], nums[index]])
                    }
                    
                }
            }
        }
    }
    return result
};
// @lc code=end
// threeSum([-1,0,1,2,-1,-4])
// threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4])

/**
 * @param {number[]} nums
 * @return {number[][]}
 * 参考别人的题解了，利用双指针来做的
 * 感觉还是得多做题，最开始用两数之和的方式来解，最后发现细节点很多，不太行得通
 */

threeSum = function (nums) {
    // 先排序，保证数组递增，并且相同的数挨在一起
    nums.sort((a, b) => a - b)
    const result = []
    for(let i = 0; i < nums.length; i ++) {
        // 如果当前数大于 0 就没有遍历的必要了，后面的数都会大于 0 的
        if(nums[i] > 0) {
            break
        }
        // 如果当前数等于前一个，就继续往后找，因为前一个已经遍历过了，避免重复
        if(nums[i] === nums[i - 1]) {
            continue
        }

        // 减去当前数，继续遍历找剩下两个数之和
        const sum = 0 - nums[i]
        // 左指针从当前索引的下一个开始找
        let left = i + 1
        // 右指针从数组最后开始找
        let right = nums.length - 1
        // 如果 left 小于 right 就继续找
        while(left < right) {
            const add = nums[left] + nums[right]
            // 判断是否等于，如果等于就加入的结果中，并且移动左指针到下一个不等于当前数的位置，右指针重置到最后一位
            if(add === sum) {
                result.push([nums[i], nums[left], nums[right]])
                let p = left + 1
                while(nums[p] === nums[left]) {
                    p ++
                }
                left = p
                right = nums.length - 1
            } else if (add > sum) { // 如果两数之和大于目标数，就移动右指针，为啥？因为数组是排好序的，左指针已经是最小的值了
                right = right - 1
            } else { // 如果两数之和小于目标数，就移动左指针，为啥？因为数组是排好序的，右指针已经是最大的值了
                left = left + 1
            }
        }
    }
    return result
}
// threeSum([-1,0,1,2,-1,-4])
threeSum([3,-2,1,0])