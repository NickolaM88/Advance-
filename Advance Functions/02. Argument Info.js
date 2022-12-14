function solve() {
    let params = Array.from(arguments);
    let types = {};

    for (let arg of params) {
        let type = typeof arg;
        console.log(`${type}: ${arg}`);

        if(types[type] === undefined) {
            types[type] = 0;
        }
        types[type]++;
    }
    let result = Object.entries(types).sort((a, b) => b[1] - a[1]);

    for (let [type,count] of result) {
        console.log(`${type} = ${count}`);
    }
}

solve('cat', 42, function () { console.log('Hello world!'); })