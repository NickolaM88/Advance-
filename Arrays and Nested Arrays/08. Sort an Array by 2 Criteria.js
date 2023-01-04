function solve(arr) {
arr.sort(TwoCriteriaSorter);
return arr.join(`\n`);

function TwoCriteriaSorter(current, next) {
    //sort 
    if(current.length === next.length){
        //implement second criteria
        return current.localeCompare(next)
    }
    return current.length - next.length;
}
}

solve(['Isacc', 'Theodor','Jack', 'Harrison', 'George'])