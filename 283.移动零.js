/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * 因为他要求不动数组的情况下，完成这个操作，确实有点难到我了。。。虽然是个easy的题
 * 结果我居然有提交记录，4年前的我居然做出来了。。。
 * 思路：两个指针，第一个指针index从头开始移动，表示我这个位置尽可能有值。
 * 第二个指针从头开始遍历，如果有值就赋值给index，两者都自增，直到数组遍历完。
 * 最后从index开始补0直到数组最后。
 * 天，我好笨，这个都想半天
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let index = 0;
    for (let j = 0; j < nums.length; j++) {
        if(nums[j] !== 0){
            nums[index] = nums[j];
            index++;
        }
    }
    for(let i = index; i < nums.length; i++){
        nums[i] = 0;
    }
    return nums;
};
// @lc code=end

// 看了leetcode，还可以用快排的思想来解决，试着来实现一下，有些忘了
// 都从0开始，等于0的放在右边，正常值放在左边
var moveZeroes2 = function(nums) {
    // 找到第一个0
    let index = 0
    while(nums[index]) {
        index++
    }
    // 从0的右边开始
    // 这样可以永远保证index位置是0
    let next = index + 1
    while(next < nums.length){
        if(nums[next] != 0){
            const t = nums[index]
            nums[index] = nums[next]
            nums[next] = t
            index++
        }
        next++
    }
    return nums
};
// debugger
console.log(moveZeroes2([1,0,1]))