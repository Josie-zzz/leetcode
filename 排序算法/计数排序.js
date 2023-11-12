/**
 * @param {Array} arr 
 * @returns {Array}
 */
const countSort = (arr) => {
    if(arr.length < 2) {
        return arr
    }
    // 遍历数组找到最大值
    let maxValue = arr[0]
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > maxValue) {
            maxValue = arr[i]
        }
    }
    // 创建一个最大值长度的数组，所以是 + 1，因为包含 0
    const countArr = new Array(maxValue + 1)
    arr.forEach(val => {
        if(!countArr[val]) {
            countArr[val] = 0
        }
        countArr[val]++
    })
    // 遍历临时数组生成新的数组
    const result = []
    countArr.forEach((val, index) => {
        if(val) {
            let count = val
            while(count > 0) {
                result.push(index)
                count --
            }
        }
    })
    return result
}

console.log(countSort([9, 8, 7, 6, 5, 4, 2]))
console.log(countSort([4, 8, 10, 1, 27, 17, 0]))
console.log(countSort([1, 6, 9, 3, 27, 17, 0]))