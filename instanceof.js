class Employee {

}

class Manager extends Employee {

}

const budi = new Employee();
const eko = new Manager ();

console.log(typeof budi);  //object
console.log(typeof eko);   //object

console.log(budi instanceof Employee);   //true
console.log(budi instanceof Manager);    //false

console.log(eko instanceof Employee);   //true --> menjadi true karena eko turunan dari employee
console.log(eko instanceof Manager);    //true

// instance of juga bisa digunakan buat inheritance, mengecek pewarisan



