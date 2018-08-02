function every (arr, test) {
    for (let item of arr) {
        if (!test(item)) {
            return false
        }
    }
    return true
}

function every2 (arr, test) {
    return !arr.some(el => !test(el))
}

function isBelowTreshold (currentVal) {
    return currentVal < 40
}

const arr = [1, 30, 39, 29, 10, 13]
const arr2 = [1, 50, 43, 29, 10, 13]

console.log(every(arr, isBelowTreshold))
console.log(every(arr2, isBelowTreshold))

console.log(every2(arr, isBelowTreshold))
console.log(every2(arr2, isBelowTreshold))