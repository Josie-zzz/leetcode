/**
 * 先递归拆分数组，然后将每个小数组依次排好序，直到最后合并成一个大的数组，所以设置两个函数，一个递归拆数组，一个将两个数组排序并合并
 * 拆数组递归，直到数组中只有一项为止，这一项就是排好序的一项，然后将两个排好序的数组合并为一个排好序的数组
 * @param {Array} arr 
 * @returns {Array}
 */
const mergeSort = (arr) => {
    if(arr.length < 2) {
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid, arr.length))
    return mergeArr(left, right)
}
/**
 * 就是将两个排好序的数组合并为一个大的排好序的数组
 * @param {Array} left 
 * @param {Array} right 
 * @returns {Array}
 */
const mergeArr = (left, right) => {
    const result = []
    let i = 0
    let j = 0
    while(i < left.length && j < right.length) {
        if(left[i] < right[j]) {
            result.push(left[i])
            i++
        } else {
            result.push(right[j])
            j++
        }
    }
    return result.concat(i < left.length ? left.slice(i) : right.slice(j))
}

console.log(mergeSort([9, 8, 7, 6, 5, 4, 2]))
console.log(mergeSort([4, 8, 10, 1, 27, 17, 0]))
console.log(mergeSort([1, 6, 9, 3, 27, 17, 0]))