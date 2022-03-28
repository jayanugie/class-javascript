class Person {
    //instance
    constructor(name) {
        this.name = name;
    }

    //method
    sayHello(name) {
        console.log(`Hello ${name}, my name is ${this.name}`);
    }
}


const eko = new Person("Eko");
console.log(eko);
eko.sayHello("Joko");

const budi = new Person("Budi");
console.log(budi);
budi.sayHello("Joko");



