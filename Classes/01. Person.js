class Person {
    constructor(firstName, lastName , age , email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

let myPerson = new Person("Jhon", "Smith",27,"jhonsmith@abv.bg");
console.log(myPerson.toString());