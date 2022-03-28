class Shape {

    paint() {
        console.log("Paint Shape");
    }

    paint2() {
        console.log("Paint Shape2");
    }

}


class Circle extends Shape {
    paint() {
        super.paint();
        super.paint2();
        console.log("Paint Circle")
    }
}


const circle = new Circle();


circle.paint(); //mengembalikan nilai dari paint di shape dan di circle