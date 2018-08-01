let a = [1,2,3,5,6]
let b = [1,2,3,5,6]

function deepEqual (a, b) {
    if (a === b) return true

    if (a == null || typeof a != 'object' || b == null || typeof b != 'object') return false

    if (typeof a == 'object' && typeof b == 'object') {
        let keysA = Object.keys(a), 
            keysB = Object.keys(b)
        
        for (let key of keysA) {
            if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false
        }
    }

    return true;
}

let obj = {name: 'Joe', age: 4, scores: [2,4,5]};
console.log(deepEqual(obj, {name: 'Steve', object: 2}))
console.log(deepEqual(obj, obj))
console.log(deepEqual(a,b))