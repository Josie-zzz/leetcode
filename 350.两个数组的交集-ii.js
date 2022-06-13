/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

/**
 * 我的解法：首先遍历其中一个数组转换成hash表：key为值，val为出现次数，然后在遍历另一个数组，去查找这个对象
 * 时间复杂度：O(m+n)
 * 空间复杂度：O(random(m,n))
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var _intersect = function (nums1, nums2) {
    // 遍历其中一个数组为hash表，key为值，val为出现次数
    let hash = {}
    nums1.forEach(v => {
        if (!hash[v]) {
            hash[v] = 1
        } else {
            hash[v]++
        }
    })

    const arr = []
    nums2.forEach(v => {
        if(hash[v]){
            arr.push(v)
            hash[v]--
        }
    })
    return arr
}
/**
 * 优化：降低空间复杂度 -> 比较两个数组的长度，长度短的作为hash table
 * 时间复杂度：O(m+n)
 * 空间复杂度：O(min(m,n))
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let intersect = function (nums1, nums2) {
    if(nums2.length < nums1.length){
        return intersect(nums2, nums1)
    }

    let hash = {}
    nums1.forEach(v => {
        if (!hash[v]) {
            hash[v] = 1
        } else {
            hash[v]++
        }
    })

    const arr = []
    nums2.forEach(v => {
        if(hash[v]){
            arr.push(v)
            hash[v]--
        }
    })
    return arr
}

console.log(intersect([4,9,5], [9,4,9,8,4]))