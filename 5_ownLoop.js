function loop (value, test, update, body) {
    for(let i = value; test(i); i = update(i)) {
        body(i)
    }
}

loop(5, 
    (i) => { return i < 10}, (i) => {
    return i = i + 1 }, (i) => {console.log(i)})