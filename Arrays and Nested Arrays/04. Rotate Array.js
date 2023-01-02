function solve(arr,rotation) {
    for (let index = 0; index < rotation; index++) {
        arr.unshift(arr.pop());
    }
    console.log(arr.join(' '));
}

solve(['1',
'2',
'3',
'4'],
2)