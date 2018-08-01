function reverseArray (arr) {
    let reversedArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i])
    }
    return reversedArr
}

function reverseArrayInPlace (arr) {
    for (let i = 0; i <= arr.length % 2; i++) {
        let last = arr.length - i - 1
        let temp = arr[i]
        arr[i] = arr[last]
        arr[last] = temp
    }
}

let arr = ["Apples", "Bananas", "Cantaloupe", "Dragon Fruit", "Elderberry"]
console.log(reverseArray(arr))
console.log('----------------')
console.log(arr)
reverseArrayInPlace(arr)
console.log(arr)