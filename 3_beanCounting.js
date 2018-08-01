let str = 'Boris brought Brian’s bones by baleful bus beyond Berlin'

function countBs (str) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if(str[i] === 'B') count++
    }
    return count;
}

function countChars (str, char) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) count++
    }
    return count
}

console.log(countBs(str))
console.log(countChars(str, 'b'))