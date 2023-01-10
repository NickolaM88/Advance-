function solve() {
  class Person {
    constructor(firstName, lastName, age, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
    }
    toString() {
      return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
  }

  return [
    new Person(
      (this.firstName = "Anna"),
      (this.lastName = "Simpson"),
      (this.age = 22),
      (this.email = "anna@yahoo.com")
    ),
    new Person((this.firstName = "SoftUni")),
    new Person(
      (this.firstName = "Stephan"),
      (this.lastName = "Johnson"),
      (this.age = 25)
    ),
    new Person(
      (this.firstName = "Gabriel"),
      (this.lastName = "Peterson"),
      (this.age = 24),
      (this.email = "g.p@gmail.com")
    ),
  ];
}
