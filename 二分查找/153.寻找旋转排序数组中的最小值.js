/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * 感觉这个题第一眼好像没啥思路，但是做着做着居然很快就做出来了
 * 因为也知道是二分法的题，然后按照二分的思路就很好写了
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let start = 0
    let end = nums.length - 1
    let min = nums[0]
    while(start <= end) {
        const mid = Math.floor((start + end) / 2)
        // 说明这一段升序没问题
        if (nums[mid] >= min) {
            start = mid + 1
        } else {
            // 否则说明当前的至少在旋转数组中，所以继续看左边是否还有更小的值
            min = nums[mid]
            end = mid - 1
        }
    }
    return min
};
// @lc code=end
/**
 * 思路二：收窄边界，一直将最小值包裹在一个区间内，直到区间缩小到一个为止
 * 因为他们都是递增序列，如果旋转的话，就是两段递增。
 * 如果中间的值大于右边的，说明最小值在右边，移动左指针，注意加 1
 * 如果小于右边，说明最小值可能在左边，移动右指针
 * 保证左开右闭
 */
findMin = function(nums) {
    let left = 0
    let right = nums.length - 1
    while(left < right) {
        const mid = Math.floor((left + right) / 2)
        if(nums[mid] > nums[right]) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    // 最后 left === right === mid
    return nums[left]
}

findMin([3,4,5,1,2])