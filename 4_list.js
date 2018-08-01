let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

function arrToList (arr) {
    let list = null
    for (let item of arr) {
        list = {value: item, rest: list}
    }
    return list
}

function listToArray (list) {
    let arr = []
    while (list.rest != null) {
        arr.push(list.value)
        list = list.rest
    }
    arr.push(list.value)
    return arr
}

console.log(arrToList([1,2,3]))
console.log(listToArray(list))