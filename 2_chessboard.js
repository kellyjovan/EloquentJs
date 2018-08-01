function chessboard (size = 8) {
    const SPACE = ' '
    let string = ''
    for (let i = 0; i < size; i++) {
        if (i % 2 == 0) string += SPACE;
        for (let x = 0; x < size; x++) {
            x % 2 === 0 ? string += SPACE : string += '#';
        }
        string += '\n'
    }
    return string;
}

console.log(chessboard())