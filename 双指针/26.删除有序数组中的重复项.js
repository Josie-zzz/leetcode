/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 * 更改数组 nums ，使 nums 的前 k 个元素包含唯一元素，并按照它们最初在 nums 中出现的顺序排列。nums 的其余元素与 nums 的大小不重要。
 */

// @lc code=start
/**
 * 根据题目的提示，使用双指针做的
 * 两个指针，一个代表前驱节点，一个代表后驱节点，后驱节点的作用就是找到一个不等于前驱的放在前驱位置+1 的位置
 * 直到数组结束，如果有重复的，刚好 left 结束位置就是最后一个不重复的位置，返回 left + 1
 * 如果没有重复的，else 中也会+1 操作，刚好会使得 left 在数组最后一个位置，也返回left + 1没问题
 * @param {number[]} nums
 * @return {number}
 * [1,1,2,2,3,3,3,4,5,6]
 * [1,2,3,4]
 * [1,1,2]
 */
var removeDuplicates = function(nums) {
    // 表示前一个
    let left = 0
    // 表示后一个
    let right = 1
    // 循环的条件是都在数组内
    // right 的作用就是找到一个不等于 left 的值放在 left + 1 的位置
    // 每次判断都是基于 left，因为数组中数值会被操作，left 就是 right 真正前驱值
    while(left < nums.length && right < nums.length) {
        if(nums[left] === nums[right]) {
            right = right + 1
            while(right < nums.length) {
                if(nums[right] !== nums[left]) {
                    left = left + 1
                    nums[left] = nums[right]
                    right = right + 1
                } else {
                    right++
                }
            }
        } else {
            left++
            right++
        }
    }
    return left + 1
};
// @lc code=end
/**
 * 看了题解，有更简约的写法，思想是一样的
 * 其实不管是否有重复，right都会++，然后每次判断 left 如果不相等就赋值，并+1
 * 如果数组没有重复的一直走这个逻辑也没问题，也就是把自己赋给自己。
 */
removeDuplicates = function(nums) {
    // 表示前一个
    let left = 0
    // 表示后一个
    let right = 1
    while(right < nums.length) {
        if(nums[left] !== nums[right]) {
            left = left + 1
            nums[left] = nums[right]
        }

        right++
    }
    return left + 1
}