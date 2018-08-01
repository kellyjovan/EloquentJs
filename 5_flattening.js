let arr = [[1,2,3], [4, 5]]

function flatten(arr) {
    return arr.reduce(
        (a, b) => {
           return a.concat(b)
        }
    )
}

console.log(flatten(arr))