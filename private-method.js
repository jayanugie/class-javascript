class Person {

    say(name) {
        if(name) {
            this.#sayWithName(name);
        } else {
            this.#sayWithoutName();
        }
    }

    #sayWithoutName() {
        console.log("Hello");
    }   

    #sayWithName(name) {
        console.log(`Hello ${name}`);
    }
}


const eko = new Person();
eko.say("Joko");

// eko.#sayWithoutName();   //error karena #sayWithoutName merupakan private method