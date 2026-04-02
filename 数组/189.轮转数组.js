/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * 这个是切割数组比较简单
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(k % (nums.length) === 0) {
        return nums
    }
    const newK = k % nums.length
    const arr1 = nums.slice(nums.length - newK)
    // const arr2 = nums.slice(0, nums.length - newK)
    let idx = nums.length - newK
    let arr = nums
    for(let i = nums.length - 1; i >= 0; i--) {
        idx = idx - 1
        if(idx < 0) {
            idx = arr1.length - 1
            arr = arr1
        }
        nums[i] = arr[idx]
    }
    // nums = arr1.concat(arr2)
};
const nums = [1,2,3,4,5,6,7]
// @lc code=end
// console.log(rotate(nums, 3), nums)

// 2024.9.1 复习的时候想到一个轮转数组的方法，自己模拟了一遍可行，所以试试看
// 还有点问题，以后再说
rotate = function(nums, k) {
    // 从数组末端开始
    let p = nums.length - 1
    let current = nums[p]
    let swap = 0
    do {
        // 找到下一个合适的位置
        const next = (p + k) % nums.length
        // 将当前的数付费下一个位置，然后当前数改成下一个位置的值，继续这个步骤
        const t = nums[next]
        nums[next] = current
        current = t
        p = next
        swap ++
    } while(p !== nums.length - 1)
    return nums
};

console.log(rotate([1,2,3,4,5,6,7], 3))