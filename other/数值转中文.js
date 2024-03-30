// case
//千 万 亿
// console.log('十一', 1234, 34, 234)
// console.log('三十四')

const map = new Map([
    [0, '零'],
    [1, '一'],
    [2, '二'],
    [3, '三'],
    [4, '四'],
    [5, '五'],
    [6, '六'],
    [7, '七'],
    [8, '八'],
    [9, '九'],
])

const spe = new Map([
    [10, '十'],
    [100, '百'],
    [1000, '千'],
    [10000, '万'],
    [10000 * 10000, '亿'],
])

// 区间
const line = [10, 100, 1000, 10000, 10000 * 10000]

const transform = (num) => {
    if(num <= 10) {
        return map.get(num)
    } else if(spe.has(num)) {
        return `一${spe.get(num)}`
    } else {
        const idx = line.findIndex(v => num < v)
        const n = line[idx - 1]
        const one = num % n
        const two = Math.floor(num / n)
        if(one) {
            return `${transform(two)}${spe.get(n)}${transform(one)}`
        } else {
            return `${transform(two)}${spe.get(n)}`
        }
    }
}
console.log(transform(279))
console.log(transform(79))
console.log(transform(100))
console.log(transform(10000))
console.log(transform(10000 * 10000))