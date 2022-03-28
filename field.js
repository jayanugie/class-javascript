// FIELD (property yang berisi value) --> sejajar dengan constructor

// PUBLIC CLASS FIELD = bisa diakses di luar class (setiap field maka defaultnya publik)
class Customer {
    //field
    firstName;
    lastName;
    balance = 0;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello(){
    }
}

const eko = new Customer("Budi", "Nugraha");
//atau 

// eko.firstName = "Eko";
// eko.lastName = "Saputra";
console.log(eko);


// PRIVATE CLASS FIELD = hanya bisa diakses di dalam class
class Counter {

    #counter = 0;       //tambahkan # agar field jadi private

    increment() {
        this.#counter++;
    }

    decrement() {
        this.#counter--
    }

    get() {
        return this.#counter;
    }
}

const counter = new Counter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.get());


counter.counter = 100;
console.log(counter);