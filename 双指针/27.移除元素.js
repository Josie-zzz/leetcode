/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // 代表索引位置
    let p1 = 0
    // 找到最近一个不等于 val 的数放在p1
    let p2 = 0
    let repeat = 0
    while(p1 < nums.length) {
        // 如果p2还有，说明还有数没放好位置，否则说明都摆放好了，后面置 0 就行了
        if(p2 < nums.length) {
            // 等于的话就记录
            if(nums[p2] === val) {
                repeat ++
            } else {
                // 不等于就赋值给 p1位置，p1 继续递增
                nums[p1] = nums[p2]
                p1 ++
            }
            // 不管如何都需要 ++
            p2 ++
        } else {
            nums[p1] = 0
            p1 ++
        }
    }
    return nums.length - repeat
};
// @lc code=end

