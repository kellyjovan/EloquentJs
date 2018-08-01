function range (first, last, increment = 1) {
    let arr = []
    if(increment < 0) {
        for (let i = first; i >= last; i += increment) arr.push(i)   
    } else {
        for (let i = first; i <= last; i += increment) arr.push(i)
    }
    return arr
}

function sum (arr) {
    let sum = 0
    for (let num of arr) {
        sum += num
    }
    return sum
}

console.log(sum(range(50, 5, -5)))
console.log(sum(range(5, 50, 5)))