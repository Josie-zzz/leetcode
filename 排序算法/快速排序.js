const quickSort = (arr) => {
    const quick = (left, right) => {
        if(right - left < 2) {
            return
        }
        const mid = Math.floor((right + left ) / 2)
        const value = arr[mid]
        let p1 = left
        let p2 = right
        while(p1 <= p2) {
            // 注意等于主元的情况会停下来
            while(arr[p1] < value) {
                p1++
            }
            while(arr[p2] > value) {
                p2--
            }
            // 注意是小于等于都要交换
            if(p1 <= p2) {
                const t = arr[p1]
                arr[p1] = arr[p2]
                arr[p2] = t
                p1++
                p2--
            }
        }
        quick(left, p1 - 1)
        quick(p1, right)
    }

    quick(0, arr.length - 1)
    return arr
}

console.log(quickSort([3,5,1,6,4,7,2]))
console.log(quickSort([9, 8, 7, 6, 5, 4, 2]))
console.log(quickSort([4, 8, 10, 1, 27, 17, 0]))
console.log(quickSort([1, 6, 9, 3, 27, 17, 0]))
