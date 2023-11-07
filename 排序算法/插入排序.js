/**
 * 两层循环
 * 外层循环：假设第一项是排好序的，所以从第二项到最后一项，都是不确定顺序的，所以都是待插入的数
 * 内层循环：设置一个指针，从当前项开始直到第一项，暂存当前项，然后依次和前面的数比较，如果大于当前数就往后挪，最后指针停留的位置就是当前数值最合适的位置
 * @param {Array} arr 
 * @returns {Array}
 */
const insertSort = (arr) => {
    // 从第二项到最后一项都是待比较的数据
    for (let i = 1; i < arr.length; i++) {
        // 从当前位置开始
        let pointer = i
        // 暂存待排序的值
        let value = arr[pointer]
        // 如果当前值小于前一项，就把前面的挪到后面来，然后指针 -1
        // 控制pointer大于0，因为数组就那么长
        while(value < arr[pointer - 1] && pointer > 0) {
            arr[pointer] = arr[pointer - 1]
            pointer --
        }
        // 最后pointer的位置就是待插入值的最合适位置，这里在赋值
        arr[pointer] = value
    }
    return arr
}

console.log(insertSort([9, 8, 7, 6, 5, 4, 2]))
console.log(insertSort([4, 8, 10, 1, 27, 17, 0]))
console.log(insertSort([1, 6, 9, 3, 27, 17, 0]))