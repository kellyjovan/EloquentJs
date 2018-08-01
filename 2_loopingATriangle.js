function loopingATriangle (char, numTimes) {
    let output = ''
    for (let i = 1; i <= numTimes; i++) {
        for (let x = 0; x < i; x++) {
            output += char;
        }
        output += '\n';
    }
    return output;
}

console.log(loopingATriangle('#', 7));