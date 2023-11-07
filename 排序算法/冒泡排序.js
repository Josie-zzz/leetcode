/**
 * 最简的冒泡排序，两层循环
 * 外层循环：控制数组需要的交换次数，比如数组长度为 3，他只需要比较 2 次就行，所以 i < arr.length - 1
 * 内层循环：从第一个开始往后冒泡，因为在倒数第2个就可以对比完所以是 arr.length - 1，
 * 然后又因为每一轮比较完，都会使得数组最后的数值是正确的顺序，所以 arr.length - 1 - i，省去多余比较。
 * @param {Array} arr 
 * @returns {Array}
 * 时间复杂度：O(n^2)
 */
const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if(arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

console.log(bubbleSort([9, 8, 7, 6, 5, 4, 3]))
console.log(bubbleSort([4, 8, 10, 1, 27, 17, 0]))