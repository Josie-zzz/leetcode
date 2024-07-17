/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * 双指针方式
 * 因为题目条件给了说是非递减的序列，所以通过移动左右指针确定逼近目标值
 * 时间复杂度是O(n)
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let start = 0
    let end = numbers.length - 1
    while(start < end) {
        const num1 = numbers[start]
        const num2 = numbers[end]
        const sum = num1 + num2
        if(sum === target) {
            // 因为说从下标1开始。。
            return [start + 1, end + 1]
        } else if(sum > target) {
            // 如果和大于目标值，移动右指针，否则移动左指针
            end --
        } else {
            start ++
        }
    }
    return [-1, -1]
};
// @lc code=end
console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([2,3,4], 6))
console.log(twoSum([-1,0], -1))
console.log(twoSum([3,24,50,79,88,150,345], 200))


// 思路2：用二分法查找，先固定一个数，然后在这个数的右侧用二分法去寻找另一个数，所以时间复杂度是O(nlogn)