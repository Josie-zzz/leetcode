/**
 * 还是两层循环
 * 外层循环：代表当前位置索引，并假设认为第i个是最小的
 * 内层循环：从第i个下一个开始直到数组结束，找到比第i个还小的，进行交换。
 * @param {Array} arr 
 * @returns {Array}
 * 时间复杂度：O(n^2)
 */
const selectSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        // 假设 arr[i] 最小，都跟它比较
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[i]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr
}
console.log(selectSort([9, 8, 7, 6, 5, 4, 3]))
console.log(selectSort([4, 8, 10, 1, 27, 17, 0]))
