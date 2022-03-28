class Employee {

    constructor(firstName){
        this.firstName = firstName;
    }

    sayHello(name) {
        console.log(`Hello ${name}, my name is employee ${this.firstName}`);
    }
}

class Manager extends Employee {
    //constructor dari employee diturunkan
    //method sayHello diturunkan juga

    //jika ingin membuat constructor di pewarisan
    constructor(firstName, lastName) {
        super(firstName);
        this.lastName = lastName;
    }

    sayHello(name) {
        console.log(`Hello ${name}, my name is employee ${this.firstName} ${this.lastName}`); 
    }


}


const budi = new Employee("Budi");
budi.sayHello("Joko");

const eko = new Manager("Eko", "Saputra");
eko.sayHello("Joko");

console.info(budi);
console.info(eko);
