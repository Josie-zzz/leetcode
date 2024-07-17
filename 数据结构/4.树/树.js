class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

// 根据数组生成一个数
class TreeNode {
    constructor() {
        this.root = null
    }

    createTree(arr) {
        if(arr.length) {
            const findNode = (idx) => {
                if(idx >= arr.length) {
                    return
                }
                // 为 null 的情况
                if(arr[idx] === null || arr[idx] === undefined) {
                    return arr[idx]
                }
                const node = new Node(arr[idx])
                const left = findNode(2 * idx + 1)
                const right = findNode(2 * idx + 2)
                if(left !== undefined) {
                    node.left = left
                }
                if(right !== undefined) {
                    node.right = right
                }
                return node
            }
            this.root = findNode(0)
        }
        return this.root
    }

    getTree() {
        return this.root
    }
}

// const tree = new TreeNode()
// const tree2 = tree.createTree([1,null,2])
// debugger
// console.log(tree2)

module.exports = {
    TreeNode
}