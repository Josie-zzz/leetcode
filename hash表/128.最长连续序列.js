/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * 额看了半天才明白啥意思。。。，他意思是从无序数组中找到最大的一串连续的数。。。
 * 那最简单的就是暴力解法，先排序，在查找，其实是不符合题意要求的O(n)，但是先做一版再说
 * 下面这一版虽然可行，通过69个测试用例，但是在一个大数据的case下超时了。。。
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive1 = function(nums) {
    if(!nums.length) {
        return 0
    }
    if(nums.length === 1) {
        return 1
    }
    // 排序
    for(let p1 = 0; p1 < nums.length; p1++){
        for(let p2 = p1 + 1; p2 < nums.length; p2++){
            if(nums[p2] < nums[p1]){
                const t = nums[p1]
                nums[p1] = nums[p2]
                nums[p2] = t
            }
        }
    }
    // debugger
    // 去重 --- 发现测试用例居然还有重复的。。
    const newArr = []
    const obj = {}
    for(let i = 0; i < nums.length; i++) {
        const val = nums[i]
        if(!obj[val]) {
            newArr.push(val)
            obj[val] = 1
        }
    }

    // 找最大连续串
    let start = 0
    let end = 1
    let long = 1
    while(end <= newArr.length) {
        const sub = end - start
        if(sub > long) {
            long = sub
        }
        if(newArr[end] - newArr[end - 1] === 1 || start === end){
            end++
        } else {
            start++
        }
    }
    return long
};

/**
 * 在leetcode上看的题解
 * 就是说，我们只需要看数组中每一个数x，是否存在x+1,x+2,x+y，然后y+1就是最长的。
 * 那么是否存在可以用哈希表，这样查看一个数就是O(1)
 * 还有一个优化点是：如果已知有一个 x,x+1,x+2,⋯ ,x+yx, x+1, x+2, x+yx,x+1,x+2,⋯,x+y 的连续序列，而我们却重新从 x+1x+1x+1，x+2x+2x+2 或者是 x+yx+yx+y 处开始尝试匹配，那么得到的结果肯定不会优于枚举 xxx 为起点的答案，因此我们在外层循环的时候碰到这种情况跳过即可。
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(!nums.length) {
        return 0
    }
    // 首先创建一个hash map，用set可以避免数组重复的问题
    const _nums = new Set()
    for(const val of nums) {
        _nums.add(val)
    }

    let long = 1
    // 遍历这个集合
    _nums.forEach(val => {
        // 如果集合中没有比自己还小的，说明当前数可以作为一个开始
        if(!_nums.has(val - 1)) {
            let current = val
            let newLong = 1

            while(_nums.has(current + 1)) {
                current++
                newLong++
            }
            long = Math.max(newLong, long)
        }
    })
    return long
};

console.log(longestConsecutive([1,2,0,1]))
// @lc code=end