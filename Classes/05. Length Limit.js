class Stringer {
    constructor(innerString, innerLength){
        this.text = innerString;
        this.innerLength = innerLength;
    }
    decrease(index) {
        this.innerString.slice(index);
        return;
    }
    increase(index) {
        this.innerLength.push(index)
    }

}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(4);
console.log(test.toString()); // Test